import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Group, GroupMember, Message, User } from 'libs/schema/src';
import { Model } from 'mongoose';
import { AuthService } from 'src/common/auth/services/auth.service';
import { InviteSomeoneInput, UpdateUserInput } from './dto';
import { UserHelper } from './helpers/user.helper';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private userHelper: UserHelper,
    @InjectModel(Message.name)
    private readonly messageModel: Model<Message>,
    @InjectModel(Group.name)
    private readonly groupModel: Model<Group>,
    @InjectModel(GroupMember.name)
    private readonly groupMemberModel: Model<GroupMember>,
    private readonly authService: AuthService,
  ) {}

  async updateProfile(user: User, updateUserInput: UpdateUserInput) {
    const isValid = this.userHelper.validatePhoneNumber(
      updateUserInput.phone,
      updateUserInput.lang,
    );

    if (!isValid) {
      throw new BadRequestException('This input is not correct!');
    }

    const updateUser = await this.userModel.findByIdAndUpdate(
      {
        _id: user._id,
      },
      {
        $set: {
          ...updateUserInput,
        },
      },
      {
        new: true,
      },
    );

    console.log(updateUser);

    return updateUser;
  }

  async getCurrentUser(user: User) {
    const currentUser = await this.userModel.findOne({
      _id: user._id,
    });

    return currentUser;
  }

  async inviteSomeoneToGroup(
    user: User,
    inviteSomeoneInput: InviteSomeoneInput,
  ): Promise<GroupMember> {
    await this.userHelper.checkConditionsToInviteSome(
      user._id.toString(),
      inviteSomeoneInput.invitedUserId,
      inviteSomeoneInput.willJoinGroupId,
    );
    const newGroupMember = await this.groupMemberModel.create({
      user_id: inviteSomeoneInput.invitedUserId,
      group_id: inviteSomeoneInput.willJoinGroupId,
      is_admin: false,
    });
    return newGroupMember;
  }
}

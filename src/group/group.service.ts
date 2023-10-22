import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Group, GroupMember, Message, User } from 'libs/schema/src';
import { Model } from 'mongoose';
import { AuthService } from 'src/common/auth/services/auth.service';
import { GroupChatInput } from './dto';

@Injectable()
export class GroupService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    @InjectModel(Message.name)
    private readonly messageModel: Model<Message>,
    @InjectModel(Group.name)
    private readonly groupModel: Model<Group>,
    @InjectModel(GroupMember.name)
    private readonly groupMemberModel: Model<GroupMember>,
    private readonly authService: AuthService,
  ) {}

  // Room
  async createGroupChat(user: User, groupChatInput: GroupChatInput) {
    const groupNameExist = await this.groupModel.findOne({
      name: groupChatInput.name,
    });

    if (groupNameExist) {
      throw new ConflictException('This group name already exists');
    }

    const newGroup = await this.groupModel.create({
      name: groupChatInput.name.trim(),
      description: groupChatInput.description.trim(),
      create_by: user._id,
    });

    const newGroupMember = await this.groupMemberModel.create({
      user_id: user._id,
      group_id: newGroup._id,
      is_admin: true,
    });

    return newGroup;
  }

  async getAllGroup(user): Promise<Group[]> {
    const groups = await this.groupModel.find();

    return groups;
  }

  async getGroupHasCurrentUser(currentUser: User) {
    console.log(currentUser);
    const groupMemberHasCurrentUser = await this.groupMemberModel.find({
      user_id: currentUser._id.toString(),
    });

    if (!this.getGroupHasCurrentUser) {
      throw new NotFoundException("This user don't belong to any thing group!");
    }

    const groupIds = groupMemberHasCurrentUser.map((item) => item.group_id);

    const groups = this.groupModel.find({
      _id: {
        $in: groupIds,
      },
    });

    return groups;
  }
}

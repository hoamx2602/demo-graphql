import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Group, GroupMember, User } from '../../common/schema';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { Model } from 'mongoose';
import { COUNTRY_CODE } from 'src/common/constants';

@Injectable()
export class UserHelper {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    @InjectModel(Group.name)
    private readonly groupModel: Model<Group>,
    @InjectModel(GroupMember.name)
    private readonly groupMemberModel: Model<GroupMember>,
  ) {}
  validatePhoneNumber(phoneNumber: string, countryCode: COUNTRY_CODE) {
    try {
      const isValid = isValidPhoneNumber(phoneNumber, countryCode);
      return isValid;
    } catch (e) {
      return false;
    }
  }

  async checkConditionsToInviteSome(
    currentUserId: string,
    invitedUserId: string,
    willJoinGroupId: string,
  ) {
    const [
      groupExist,
      isGroupHasCurrentUser,
      isInviteUserExistInGroup,
      isUserInvitedExist,
    ] = await Promise.all([
      this.groupModel.findOne({
        _id: willJoinGroupId,
      }),
      this.groupMemberModel.findOne({
        user_id: currentUserId,
        group_id: willJoinGroupId,
      }),
      this.groupMemberModel.findOne({
        user_id: invitedUserId,
        group_id: willJoinGroupId,
      }),
      this.userModel.findOne({
        _id: invitedUserId,
      }),
    ]);

    if (!groupExist) {
      throw new BadRequestException(
        `This groupId: ${willJoinGroupId} is not exist!`,
      );
    }

    if (!isUserInvitedExist) {
      throw new BadRequestException(
        `This invited userId: ${invitedUserId} is not exist!`,
      );
    }

    if (!isGroupHasCurrentUser) {
      throw new BadRequestException(
        `This current user don\'t belong to groupId: ${willJoinGroupId}`,
      );
    }

    if (isInviteUserExistInGroup) {
      throw new BadRequestException(
        `This invited user has already belong to groupId: ${willJoinGroupId}`,
      );
    }
  }
}

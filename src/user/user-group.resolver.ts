import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/mongoose';
import { Group, GroupMember, User } from 'libs/schema/src';
import { Model } from 'mongoose';

@Resolver(() => User)
export class UserGroupResolver {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    @InjectModel(Group.name)
    private readonly groupModel: Model<Group>,
    @InjectModel(GroupMember.name)
    private readonly groupMemberModel: Model<GroupMember>,
  ) {}

  @ResolveField('groups', () => [Group])
  async groups(@Parent() user: User) {
    const groupMembers = await this.groupMemberModel.find({
      user_id: user._id,
    });

    const groupIds = groupMembers.map((item) => item.group_id);

    const groups = await this.groupModel.find({
      _id: { $in: groupIds },
    });
    return groups;
  }
}

import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/mongoose';
import { Group, GroupMember, User } from '../common/schema';
import { Model } from 'mongoose';

@Resolver(() => Group)
export class GroupUserResolver {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    @InjectModel(Group.name)
    private readonly groupModel: Model<Group>,
    @InjectModel(GroupMember.name)
    private readonly groupMemberModel: Model<GroupMember>,
  ) {}

  @ResolveField('users', () => [User])
  async users(@Parent() group: Group) {
    const userMembers = await this.groupMemberModel.find({
      group_id: group._id,
    });

    const userIds = userMembers.map((item) => item.user_id);

    console.log(userIds);

    const users = await this.userModel.find({
      _id: { $in: userIds },
    });
    return users;
  }
}

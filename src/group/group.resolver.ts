import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/common/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { Group, User } from '../common/schema';
import { GroupChatInput } from './dto';
import { GroupService } from './group.service';

@Resolver()
export class GroupResolver {
  constructor(private groupService: GroupService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Group)
  async createGroupChat(
    @CurrentUser() user: User,
    @Args('groupChatInput') groupChatInput: GroupChatInput,
  ) {
    return await this.groupService.createGroupChat(user, groupChatInput);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [Group])
  async getAllGroups(@CurrentUser() user: User) {
    return await this.groupService.getGroupHasCurrentUser(user);
  }
}

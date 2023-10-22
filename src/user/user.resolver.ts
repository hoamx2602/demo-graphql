import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Group, GroupMember, User } from 'libs/schema/src';
import { JwtAuthGuard } from 'src/common/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { UserService } from './user.service';
import { InviteSomeoneInput, UpdateUserInput } from './dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => User)
  getCurrentUser(@CurrentUser() user: User) {
    return this.userService.getCurrentUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => User)
  updateProfile(
    @CurrentUser() user: User,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.userService.updateProfile(user, updateUserInput);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => GroupMember)
  inviteSomeoneToGroup(
    @CurrentUser() user: User,
    @Args('inviteSomeoneInput') inviteSomeoneInput: InviteSomeoneInput,
  ) {
    return this.userService.inviteSomeoneToGroup(user, inviteSomeoneInput);
  }
}

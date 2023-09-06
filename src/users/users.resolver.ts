import { Resolver, Query, Mutation, Args, Int, Subscription } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from 'src/common/auth/guards/jwt-auth.guard';
import { CreateUserInput, LoggedUserOutput, LoginUserInput, UpdateUserInput } from './dto';
import { OnlySameUserByIdAllowed } from 'src/common/interceptors/users.interceptor';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  // @UseInterceptors(OnlySameUserByIdAllowed)
  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('_id', { type: () => String }) id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    const user = await this.usersService.create(createUserInput);
    pubSub.publish('newMessage', {
      newMessage: user
    })
    return user
  }

  @Mutation(() => LoggedUserOutput)
  loginUser(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.usersService.loginUser(loginUserInput);
  }

  @UseGuards(JwtAuthGuard)
  // @UseInterceptors(OnlySameUserByIdAllowed)
  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput._id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('_id', { type: () => String }) id: string) {
    return this.usersService.remove(id);
  }

  @Subscription(() => User)
  newMessage() {
    return pubSub.asyncIterator('newMessage')
  }
}

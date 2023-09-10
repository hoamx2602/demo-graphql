import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { ChatService } from '../chat.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/common/auth/guards/jwt-auth.guard';
import {
  CreateUserInput,
  LoggedUserOutput,
  LoginUserInput,
  UpdateUserInput,
  UserTypingInput,
} from '../dto';
import { PubSub } from 'graphql-subscriptions';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { CreateMessageInput } from '../dto/create-message.input';
import { Message, Room, User } from '../entities';

const pubSub = new PubSub();

@Resolver(() => User)
export class ChatResolver {
  constructor(private readonly chatService: ChatService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [User], { name: 'users' })
  findAll(@CurrentUser() user: User) {
    console.log(user);
    return this.chatService.findAll();
  }

  @Query(() => [Room], { name: 'rooms' })
  getRoomsChat() {
    return this.chatService.getRoomsChat();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('_id', { type: () => String }) id: string) {
    return this.chatService.findOne(id);
  }

  @Mutation(() => User)
  async register(@Args('createUserInput') createUserInput: CreateUserInput) {
    const user = await this.chatService.register(createUserInput);
    pubSub.publish('newUser', {
      newUser: user,
    });
    return user;
  }

  @Mutation(() => LoggedUserOutput)
  loginUser(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.chatService.loginUser(loginUserInput);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Message)
  async createMessage(
    @CurrentUser() user: User,
    @Args('createMessageInput') createMessageInput: CreateMessageInput,
  ) {
    const newMessage = await this.chatService.createMessage(
      user,
      createMessageInput,
    );
    pubSub.publish('newMessage', {
      newMessage,
    });
    return newMessage;
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.chatService.update(updateUserInput._id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('_id', { type: () => String }) id: string) {
    return this.chatService.remove(id);
  }

  @Mutation(() => Boolean)
  userTyping(@Args('userTypingInput') userTypingInput: UserTypingInput) {
    pubSub.publish('userTyping', {
      email: userTypingInput.email,
      receiverMail: userTypingInput.receiverMail,
    });
    return true;
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Room)
  async createChatRoom(@CurrentUser() user: User, @Args('name') name: string) {
    return await this.chatService.createChatRoom(user, name);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Room)
  async joinRoom(@CurrentUser() user: User, @Args('roomId') roomId: string) {
    return await this.chatService.joinRoom(user, roomId);
  }

  @Subscription(() => Message, {
    filter: (payload, variables) => {
      return payload.newMessage.receiverMail === variables.receiverMail;
    },
  })
  newMessage(@Args('receiverMail') receiverMail: string) {
    return pubSub.asyncIterator('newMessage');
  }

  @Subscription(() => User)
  newUser() {
    return pubSub.asyncIterator('newUser');
  }

  @Subscription(() => User, {
    filter: (payload, variables) => {
      return payload.newMessage.receiverMail === variables.receiverMail;
    },
  })
  currentUserTyping(@Args('receiverMail') receiverMail: string) {
    return pubSub.asyncIterator('currentUserTyping');
  }
}

import { UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Args, Mutation, Resolver, Subscription, Query } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { FileUpload, GraphQLUpload } from 'graphql-upload-ts';
import { JwtAuthGuard } from 'src/common/auth/guards/jwt-auth.guard';
import { AwsService } from 'src/common/aws/aws.service';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { Message, User } from 'src/common/schema';
import { GroupService } from 'src/group/group.service';
import {
  AddNewMessageInput,
  GetMessageGroupInput,
  GetMessageOneOneInput,
  UpdateMessageInput,
  UserTypingInput,
} from '../dto/input';
import { MessageService } from '../message.service';

const pubSub = new PubSub();

@Resolver(() => Message)
export class MessageResolver {
  constructor(
    private readonly messageService: MessageService,
    private readonly groupService: GroupService,
    private readonly configService: ConfigService,
    private awsService: AwsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [Message])
  async getAllMessageGroup(
    @CurrentUser() user: User,
    @Args('getMessageGroupInput') getMessageGroupInput: GetMessageGroupInput,
  ) {
    const groupMessage = await this.messageService.getAllMessageGroup(
      user,
      getMessageGroupInput,
    );
    return groupMessage;
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [Message])
  async getMessagesOneOne(
    @CurrentUser() user: User,
    @Args('getMessageOneOneInput') getMessageOneOneInput: GetMessageOneOneInput,
  ) {
    const messageWithFriend = await this.messageService.getMessagesOneOne(
      user,
      getMessageOneOneInput,
    );
    return messageWithFriend;
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => [Message])
  async updateMessageOneOne(
    @CurrentUser() user: User,
    @Args('updateMessageInput') updateMessageInput: UpdateMessageInput,
  ) {
    const updatedMessage = await this.messageService.updateMessageOneOne(
      user,
      updateMessageInput,
    );
    return updatedMessage;
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Message)
  async addNewMessage(
    @CurrentUser() user: User,
    @Args('addNewMessageInput') addNewMessageInput: AddNewMessageInput,
    @Args('media', { type: () => GraphQLUpload, nullable: true })
    media: FileUpload | null,
  ) {
    console.log('media', media);
    if (media) {
      const path = await this.messageService.uploadMediaMessage(media);
      const newMessage = await this.messageService.createNewMessage(
        user,
        addNewMessageInput,
        path,
      );
      pubSub.publish('newMessage', {
        newMessage,
      });
      return newMessage;
    } else {
      const newMessage = await this.messageService.createNewMessage(
        user,
        addNewMessageInput,
      );
      pubSub.publish('newMessage', {
        newMessage,
      });
      return newMessage;
    }
  }

  @Mutation(() => Boolean)
  userTyping(@Args('userTypingInput') userTypingInput: UserTypingInput) {
    pubSub.publish('userTyping', {
      email: userTypingInput.email,
      receiverMail: userTypingInput.receiverMail,
    });
    return true;
  }

  @Subscription(() => Message, {
    filter: (payload, variables) => {
      return payload.newMessage.group_id === variables.groupId;
    },
  })
  newMessage(@Args('groupId') groupId: string) {
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

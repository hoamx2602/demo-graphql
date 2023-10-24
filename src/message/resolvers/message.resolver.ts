import { UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { FileUpload, GraphQLUpload } from 'graphql-upload-ts';
import { JwtAuthGuard } from 'src/common/auth/guards/jwt-auth.guard';
import { AwsService } from 'src/common/aws/aws.service';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { Message, User } from 'src/common/schema';
import { GroupService } from 'src/group/group.service';
import { AddNewMessageInput, UserTypingInput } from '../dto/input';
import { MessageService } from '../message.service';

const pubSub = new PubSub();

@Resolver(() => User)
export class MessageResolver {
  constructor(
    private readonly messageService: MessageService,
    private readonly groupService: GroupService,
    private readonly configService: ConfigService,
    private awsService: AwsService,
  ) {}

  // @UseGuards(JwtAuthGuard)
  // @Query(() => [User], { name: 'users' })
  // findAll(@CurrentUser() user: User) {
  //   console.log(user);
  //   return this.messageService.findAll();
  // }

  // @Query(() => User, { name: 'user' })
  // findOne(@Args('_id', { type: () => String }) id: string) {
  //   return this.messageService.findOne(id);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Mutation(() => Message)
  // async createMessageOneOne(
  //   @CurrentUser() user: User,
  //   @Args('createMessageInput') createMessageInput: CreateMessageInput,
  // ) {
  //   const newMessage = await this.messageService.createMessage(
  //     user,
  //     createMessageInput,
  //   );

  //   pubSub.publish('newMessage', {
  //     newMessage,
  //   });
  //   return newMessage;
  // }

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

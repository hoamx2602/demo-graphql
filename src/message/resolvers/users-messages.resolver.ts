import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Message, User } from 'src/common/schema';

@Resolver(() => User)
export class UsersMessagesResolver {
  constructor(
    @InjectModel(Message.name)
    private readonly messageModel: Model<Message>,
  ) {}

  // @ResolveField('messages', () => [Message])
  // async getUserMessages(@Parent() user: User) {
  //   return this.messageModel
  //     .find({
  //       _id: { $in: user.messages },
  //     })
  //     .exec();
  // }
}

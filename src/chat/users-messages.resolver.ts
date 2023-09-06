import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from './entities/message.entity';
import { Model } from 'mongoose';

@Resolver(() => User)
export class UsersMessagesResolver {
  constructor(
    @InjectModel(Message.name)
    private readonly messageModel: Model<Message>,
  ) {}

  @ResolveField('messages', () => [Message])
  async getUserMessages(@Parent() user: User) {
    return this.messageModel
      .find({
        _id: { $in: user.messages },
      })
      .exec();
  }
}

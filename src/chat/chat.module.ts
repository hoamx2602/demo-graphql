import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatResolver } from './chat.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { CommonModule } from 'src/common/common.module';
import { Message, MessageSchema } from './entities/message.entity';
import { UsersMessagesResolver } from './users-messages.resolver';

@Module({
  imports: [
    CommonModule,
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Message.name,
        schema: MessageSchema,
      },
    ]),
  ],
  providers: [ChatResolver, ChatService, UsersMessagesResolver],
  exports: [ChatService],
})
export class ChatModule {}

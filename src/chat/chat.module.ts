import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from 'src/common/common.module';
import { ChatResolver, UsersMessagesResolver } from './resolvers';
import { Message, MessageSchema, Room, RoomSchema, User, UserSchema } from './entities';

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
      {
        name: Room.name,
        schema: RoomSchema,
      },
    ]),
  ],
  providers: [ChatResolver, ChatService, UsersMessagesResolver],
  exports: [ChatService],
})
export class ChatModule {}

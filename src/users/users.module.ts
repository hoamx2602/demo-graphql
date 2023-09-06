import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
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
  providers: [UsersResolver, UsersService, UsersMessagesResolver],
  exports: [UsersService],
})
export class UsersModule {}

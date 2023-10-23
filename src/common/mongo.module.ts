import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Message,
  MessageSchema,
  Group,
  GroupSchema,
  User,
  UserSchema,
  GroupMember,
  GroupMemberSchema,
} from '../common/schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URL'),
      }),
      inject: [ConfigService],
    }),
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
        name: Group.name,
        schema: GroupSchema,
      },
      {
        name: GroupMember.name,
        schema: GroupMemberSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class MongoModule {}

import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { CommonModule } from 'src/common/common.module';
import { MessageResolver, UsersMessagesResolver } from './resolvers';
import { GroupService } from 'src/group/group.service';

@Module({
  imports: [CommonModule],
  providers: [
    MessageResolver,
    MessageService,
    UsersMessagesResolver,
    GroupService,
  ],
  exports: [MessageService],
})
export class MessageModule {}

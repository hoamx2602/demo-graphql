import { Field, InputType } from '@nestjs/graphql';
import { REPLY_TYPE } from 'src/common/constants';

@InputType()
export class AddNewMessageInput {
  @Field(() => String, { description: 'Content of a message', nullable: true })
  content?: string;

  @Field(() => String, { description: 'GroupId', nullable: true })
  groupId?: string;

  @Field(() => String, {
    description: 'Parent message id if it has',
    nullable: true,
  })
  parentMessageId?: string;

  @Field(() => String, { description: 'Recipient Id', nullable: true })
  recipientId?: string;

  @Field(() => String, { description: 'Reply type' })
  replyType: REPLY_TYPE;
}

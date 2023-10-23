import { InputType, Field } from '@nestjs/graphql';
import { MESSAGE_TYPE } from 'src/common/constants';

@InputType()
export class CreateMessageInput {
  @Field(() => String, { description: 'Content of a message ' })
  content: string;

  @Field(() => String, { description: 'GroupId', nullable: true })
  groupId?: string;

  @Field(() => String, {
    description: 'Message parent id if it has',
    nullable: true,
  })
  messageParentId?: string;

  @Field(() => String, { description: 'Recipient Id', nullable: true })
  recipientId?: string;

  @Field(() => String, { description: 'Message type' })
  messageType: MESSAGE_TYPE;
}

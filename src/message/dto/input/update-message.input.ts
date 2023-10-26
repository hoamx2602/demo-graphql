import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateMessageInput {
  @Field(() => String, {
    description: 'Content to update message',
    nullable: true,
  })
  content: string;

  @Field(() => String, {
    description: 'Message Id use for update',
    nullable: true,
  })
  messageId: string;
}

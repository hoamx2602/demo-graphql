import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMessageInput {
  @Field(() => String, { description: 'Message of a user ' })
  message: string;

  @Field(() => String, { description: 'Receiver email' })
  receiverMail: string;
}

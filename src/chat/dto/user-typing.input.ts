import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserTypingInput {
  @Field(() => String, { description: 'Email of the user' })
  email: string;

  @Field(() => String, { description: 'Receiver email' })
  receiverMail: string;
}

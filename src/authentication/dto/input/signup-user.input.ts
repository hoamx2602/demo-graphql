import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class Message {
  @Field(() => String, { description: 'Message of a user ' })
  message: string;

  @Field(() => String, { description: 'Sender email' })
  senderMail: string;

  @Field(() => String, { description: 'Receiver email' })
  receiverMail: string;
}

@InputType()
export class SignUpUserInput {
  @Field(() => String, { description: 'Email of the user' })
  email: string;

  @Field(() => String, { description: 'Password of the user' })
  password: string;
}

import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Username' })
  name: string;

  @Field(() => String, { description: 'email of the user' })
  email: string;
}

import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginUserOutput {
  @Field(() => String, { description: 'Generated access_token of the user' })
  access_token: string;
}

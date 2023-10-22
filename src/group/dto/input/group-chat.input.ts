import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GroupChatInput {
  @Field(() => String, { description: 'Group name' })
  name: string;

  @Field(() => String, { description: 'Group description' })
  description?: string;
}

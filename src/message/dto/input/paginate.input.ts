import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class PaginateInput {
  @Field(() => Number, {
    description: 'Current page get message',
    nullable: true,
  })
  page?: number = 1;

  @Field(() => Number, {
    description: 'Max message return each time',
    nullable: true,
  })
  limit?: number = 10;
}

import { InputType, Field } from '@nestjs/graphql';
import { PaginateInput } from './paginate.input';

@InputType()
export class GetMessageOneOneInput extends PaginateInput {
  @Field(() => String, {
    description: 'Friend Id of current user',
    nullable: true,
  })
  friendId?: string;
}

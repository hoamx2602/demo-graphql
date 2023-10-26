import { InputType, Field } from '@nestjs/graphql';
import { PaginateInput } from './paginate.input';

@InputType()
export class GetMessageGroupInput extends PaginateInput {
  @Field(() => String, { description: 'GroupId', nullable: true })
  groupId?: string;
}

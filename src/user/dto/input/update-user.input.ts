import { Field, InputType } from '@nestjs/graphql';
import { COUNTRY_CODE } from 'src/common/constants';

@InputType()
export class UpdateUserInput {
  @Field(() => String, { description: 'Nick name', nullable: true })
  username?: string;

  @Field(() => String, { description: 'User name', nullable: true })
  name?: string;

  // Phone must be has the calling code
  @Field(() => String, { description: 'User phone', nullable: true })
  phone?: string;

  @Field(() => String, { description: 'User address', nullable: true })
  address?: string;

  @Field(() => String, { description: 'User language', nullable: true })
  lang?: COUNTRY_CODE;

  @Field(() => String, { description: 'User avatar', nullable: true })
  avatar?: string;
}

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class InviteSomeoneInput {
  @Field(() => String, {
    description: 'Another UserId that is invited by current user',
  })
  invitedUserId: string;

  @Field(() => String, {
    description: 'Group id that user is invited!',
  })
  willJoinGroupId: string;
}

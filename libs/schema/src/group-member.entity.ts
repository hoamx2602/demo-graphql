import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@Schema({
  collection: 'group_members',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    currentTime: () => Math.floor(Date.now()),
  },
  versionKey: false,
})
@ObjectType('group_member')
export class GroupMember {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { description: 'Id member' })
  user_id: string;

  @Prop()
  @Field(() => String, { description: 'Id group' })
  group_id: string;

  @Prop()
  @Field(() => Boolean, { description: 'Identify a user is admin of a group' })
  is_admin: boolean;

  @Prop({ type: 'number', default: () => Date.now() })
  @Field(() => Number)
  created_at: number;

  @Prop({ type: 'number', default: () => Date.now() })
  @Field(() => Number)
  updated_at: number;
}

export const GroupMemberSchema = SchemaFactory.createForClass(GroupMember);

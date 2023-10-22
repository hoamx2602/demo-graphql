import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { User } from './user.entity';

@Schema({
  collection: 'groups',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    currentTime: () => Math.floor(Date.now()),
  },
  versionKey: false,
})
@ObjectType('group')
export class Group {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { description: 'Group name' })
  name: string;

  @Prop()
  @Field(() => String, { description: 'Group description' })
  description: string;

  @Prop()
  @Field(() => String, { description: 'User Id create a group' })
  create_by: string;

  @Field(() => [User], { nullable: true })
  users: User[];

  @Prop({ type: 'number', default: () => Date.now() })
  @Field(() => Number)
  created_at: number;

  @Prop({ type: 'number', default: () => Date.now() })
  @Field(() => Number)
  updated_at: number;
}

export const GroupSchema = SchemaFactory.createForClass(Group);

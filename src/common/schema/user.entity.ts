import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Message } from './message.entity';
import { COUNTRY_CODE } from 'src/common/constants';
import { Group } from './group.entity';
@Schema({
  collection: 'users',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    currentTime: () => Math.floor(Date.now()),
  },
  versionKey: false,
})
@ObjectType('user')
export class User {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { description: 'Nick name', nullable: true })
  username?: string;

  @Prop()
  @Field(() => String, { description: 'User normal name', nullable: true })
  name?: string;

  @Prop({ unique: true })
  @Field(() => String, { description: 'User email' })
  email: string;

  @Prop()
  @Field(() => String, { description: 'User phone', nullable: true })
  phone?: string;

  @Prop()
  @Field(() => String, { description: 'User address', nullable: true })
  address?: string;

  @Prop()
  @Field(() => String, { description: 'User language', nullable: true })
  lang?: string;

  @Prop()
  @Field(() => String, { description: 'User avatar', nullable: true })
  avatar?: string;

  @Prop()
  password: string;

  // @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Message' }] })
  // @Field(() => [Message], { description: 'User messages' })
  // messages: Message[];

  @Field(() => [Group], { description: 'The groups that user belong to' })
  groups: Group[];

  @Prop({ type: 'number', default: () => Date.now() })
  @Field(() => Number)
  created_at: number;

  @Prop({ type: 'number', default: () => Date.now() })
  @Field(() => Number)
  updated_at: number;
}

export const UserSchema = SchemaFactory.createForClass(User);

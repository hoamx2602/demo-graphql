import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Message } from './message.entity';
@Schema()
@ObjectType('user')
export class User {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { description: 'Username ' })
  username: string;

  @Prop({ unique: true })
  @Field(() => String, { description: 'User email ' })
  email: string;

  @Prop()
  password: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Message' }] })
  @Field(() => [Message], { description: 'User messages' })
  messages: Message[]

  @Prop({ default: Math.floor(Date.now() / 1000) })
  @Field(() => Int, { description: 'Time when create a new user' })
  created_at: number
}

export const UserSchema = SchemaFactory.createForClass(User);

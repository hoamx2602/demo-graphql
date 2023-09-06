import { Field, ObjectType } from '@nestjs/graphql';
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
  name: string;

  @Prop({ unique: true })
  @Field(() => String, { description: 'User email ' })
  email: string;

  @Prop()
  password: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Message' }] })
  @Field(() => [Message], { description: 'User messages' })
  messages: Message[]
}

export const UserSchema = SchemaFactory.createForClass(User);

import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
@ObjectType('message')
export class Message {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { description: 'Message of a user ' })
  message: string;

  @Prop()
  @Field(() => String, { description: 'Sender email' })
  senderMail: string;

  @Prop()
  @Field(() => String, { description: 'Receiver email' })
  receiverMail: string;

  @Prop({ default: Date.now })
  @Field(() => Int, { description: 'Time to send the message' })
  created_at: number
}

export const MessageSchema = SchemaFactory.createForClass(Message);

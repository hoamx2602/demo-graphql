import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MESSAGE_TYPE, REPLY_TYPE } from 'src/common/constants';

@Schema({
  collection: 'messages',
  versionKey: false,
})
@ObjectType('message')
export class Message {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { description: 'Content of a message ', nullable: true })
  content?: string;

  @Prop()
  @Field(() => String, {
    description: 'Group id. If chat is 1:1 then group_id is null',
    nullable: true,
  })
  group_id: string;

  @Prop()
  @Field(() => String, {
    description:
      'Message parent id use when a user reply a message of another user',
    nullable: true,
  })
  message_parent_id: string;

  @Prop()
  @Field(() => String, { description: 'Sender id' })
  sender_id: string;

  @Prop()
  @Field(() => String, {
    description: 'Receiver id. If chat in a group then recipient_id is null',
    nullable: true,
  })
  recipient_id: string;

  @Prop({ type: 'string' })
  @Field(() => String, { description: 'Message type' })
  message_type: MESSAGE_TYPE;

  @Prop({ type: 'string' })
  @Field(() => String, { description: 'Message reply type' })
  reply_type: REPLY_TYPE;

  @Prop()
  @Field(() => String, {
    description: 'Media url. If message type is image/video',
  })
  media_url: string;

  @Prop({ type: 'number', default: () => Date.now() })
  @Field(() => Number)
  created_at: number;

  @Prop({ type: 'number', default: () => Date.now() })
  @Field(() => Number)
  updated_at: number;
}

export const MessageSchema = SchemaFactory.createForClass(Message);

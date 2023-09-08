import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { User } from './user.entity';
@Schema()
@ObjectType('room')
export class Room {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { description: 'Room name ' })
  name: string;

  @Prop({ default: Math.floor(Date.now() / 1000) })
  @Field(() => Int, { description: 'Time when create a new room' })
  created_at: number

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'User' }] })
  @Field(() => [User], { description: 'Room members' })
  members: User[]
}

export const RoomSchema = SchemaFactory.createForClass(Room);

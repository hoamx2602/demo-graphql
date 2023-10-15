import { ObjectId } from 'mongoose';

export interface Payload {
  email: string;

  sub: ObjectId;
}

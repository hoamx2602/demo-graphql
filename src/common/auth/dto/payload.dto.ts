import { ObjectId } from 'mongoose';

export interface Payload {
  email: string;

  name: string;

  sub: ObjectId;
}

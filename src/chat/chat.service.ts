import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/common/auth/services/auth.service';
import { CreateUserInput, LoginUserInput, UpdateUserInput } from './dto';
import { CreateMessageInput } from './dto/create-message.input';
import { Message, Room, User } from './entities';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    @InjectModel(Message.name)
    private readonly messageModel: Model<Message>,
    @InjectModel(Room.name)
    private readonly roomModel: Model<Room>,
    private readonly authService: AuthService,
  ) {}

  async create(createUserInput: CreateUserInput) {
    const saltOrRounds = 10;
    const password = createUserInput.password;
    createUserInput.password = await bcrypt.hash(password, saltOrRounds);

    let messages = [];
    createUserInput.messages.forEach((address) => {
      messages.push(new this.messageModel(address).save());
    });
    messages = await Promise.all(messages);

    const user = new this.userModel({ ...createUserInput, messages });
    return user.save();
  }

  async createMessage(user: User, createMessageInput: CreateMessageInput) {
    const newMessage = new this.messageModel({
      ...createMessageInput,
      senderMail: user.email,
    });

    await newMessage.save();
    return newMessage;
  }

  async findOneByEmail(email: string) {
    return this.userModel.findOne({
      email,
    });
  }

  async loginUser(loginUserInput: LoginUserInput) {
    const user = await this.authService.validateUser(
      loginUserInput.email,
      loginUserInput.password,
    );
    if (!user) {
      throw new BadRequestException('Email or password are invalid');
    } else {
      return this.authService.generateUserCredentials(user);
    }
  }

  findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    const user = await this.userModel.findOne({ _id: id }).exec();
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    const existingUser = await this.userModel
      .findOneAndUpdate({ _id: id }, { $set: updateUserInput }, { new: true })
      .exec();

    if (!existingUser) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return existingUser;
  }

  async remove(id: string) {
    return this.userModel.deleteOne({ _id: id });
  }

  // Room
  async createChatRoom(user: User, name: string): Promise<Room> {
    const chatRoom = new this.roomModel({ name, members: [user._id] });
    await chatRoom.save();
    return chatRoom;
  }

  async getChatRooms(): Promise<Room[]> {
    return await this.roomModel.find().exec();
  }

  async joinRoom(user: User, roomId: string): Promise<Room | null> {
    return await this.roomModel
      .findByIdAndUpdate(
        roomId,
        { $addToSet: { members: user._id } },
        { new: true },
      )
      .exec();
  }
}

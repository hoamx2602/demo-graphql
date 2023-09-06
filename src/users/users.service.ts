import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/common/auth/services/auth.service';
import { CreateUserInput, LoginUserInput, UpdateUserInput } from './dto';
import { Message } from './entities/message.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly authService: AuthService,
    @InjectModel(Message.name)
    private readonly messageModel: Model<Message>
  ) {}

  async create(createUserInput: CreateUserInput) {
    const saltOrRounds = 10;
    const password = createUserInput.password;
    createUserInput.password = await bcrypt.hash(password, saltOrRounds);

    let messages = [];
    createUserInput.messages.forEach((address) => {
      messages.push((new this.messageModel(address).save()));
    });
    messages = await Promise.all(messages);

    const user = new this.userModel({ ...createUserInput, messages });
    return user.save();
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
}

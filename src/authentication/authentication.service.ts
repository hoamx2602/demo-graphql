import { BadRequestException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Group, Message, User } from 'libs/schema/src';
import { Model } from 'mongoose';

import { hash } from 'bcrypt';
import { AuthService } from 'src/common/auth/services/auth.service';
import { LoginUserInput, SignUpUserInput } from './dto';

export class AuthenticationService {
  constructor(
    private authService: AuthService,
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    @InjectModel(Message.name)
    private readonly messageModel: Model<Message>,
    @InjectModel(Group.name)
    private readonly roomModel: Model<Group>,
  ) {}

  async login(loginUserInput: LoginUserInput) {
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

  async signup(signUpInput: SignUpUserInput) {
    const isEmailExist = await this.userModel.findOne({
      email: signUpInput.email,
    });

    if (isEmailExist) {
      throw new ConflictException('This email already used!');
    }

    const saltOrRounds = 10;
    const password = signUpInput.password;
    signUpInput.password = await hash(password, saltOrRounds);

    const user = new this.userModel(signUpInput);
    return user.save();
  }
}

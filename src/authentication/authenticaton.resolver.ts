import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { PubSub } from 'graphql-subscriptions';
import { Model } from 'mongoose';
import { User } from 'src/common/schema';
import { AuthenticationService } from './authentication.service';
import { LoginUserInput, LoginUserOutput, SignUpUserInput } from './dto';

const pubSub = new PubSub();

@Resolver()
export class AuthenticationResolver {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly configService: ConfigService,
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}
  @Mutation(() => User)
  async signup(@Args('signUpUserInput') signUpUserInput: SignUpUserInput) {
    const user = await this.authenticationService.signup(signUpUserInput);
    pubSub.publish('newUser', {
      newUser: user,
    });
    return user;
  }

  @Mutation(() => LoginUserOutput)
  async login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    // @Context() context: { res: Response },
  ) {
    const token = await this.authenticationService.login(loginUserInput);

    // const expires = new Date();
    // expires.setSeconds(
    //   expires.getSeconds() + this.configService.get('JWT_EXPIRES_IN'),
    // );

    // context.res.cookie('Authentication', token, {
    //   httpOnly: true,
    //   expires,
    // });
    return token;
  }
}

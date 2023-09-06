import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/chat/entities/user.entity';
import { ChatService } from 'src/chat/chat.service';
import { Payload } from '../dto/payload.dto';
@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => ChatService))
    private chatService: ChatService,
    private jwtTokenService: JwtService,
  ) {}
  async validateUser(email: string, password: string): Promise<any>   {
    const user = await this.chatService.findOneByEmail(email);
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        delete user.password;
        return user;
      }
    }
    return null;
  }

  async generateUserCredentials(user: User) {
    const payload: Payload = {
      email: user.email,
      name: user.name,
      sub: user._id,
    };

    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }
}
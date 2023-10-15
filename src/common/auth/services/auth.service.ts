import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ChatService } from 'src/chat/chat.service';
import { Payload } from '../dto/payload.dto';
import { User } from 'src/chat/entities';
import { ConfigService } from '@nestjs/config';
import { signJwt } from '../../utils/jwt.util';
@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => ChatService))
    private chatService: ChatService,
    private readonly configService: ConfigService,
    private jwtTokenService: JwtService,
  ) {}
  async validateUser(email: string, password: string): Promise<any> {
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
      sub: user._id,
    };

    return {
      access_token: signJwt(payload),
    };
  }

  async decodeToken(token: string) {
    if (!token) return null;
    try {
      const decoded = this.jwtTokenService.verify(token, {
        secret: this.configService.get<string>('JWT_SECRET'),
      });

      return decoded;
    } catch (error) {
      console.error(`error`, error);
      return null;
    }
  }
}

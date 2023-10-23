import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { MessageService } from 'src/message/message.service';
import { Payload } from '../dto/payload.dto';

import { ConfigService } from '@nestjs/config';
import { signJwt } from '../../utils/jwt.util';
import { User } from 'src/common/schema';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => MessageService))
    private messageService: MessageService,
    private readonly configService: ConfigService,
    private jwtTokenService: JwtService,
  ) {}
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.messageService.findOneByEmail(email);
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

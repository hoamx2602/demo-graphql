import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { ChatService } from 'src/chat/chat.service';
import { Payload } from '../dto/payload.dto';
import { User } from 'src/chat/entities';
import { publicKey } from 'src/common/utils/jwt.util';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly configService: ConfigService,
    private readonly chatService: ChatService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: any) => {
          return request?.cookies?.Authentication?.access_token;
        },
      ]),
      secretOrKey: publicKey,
      algorithms: ['RS256'],
    });
  }

  async validate(payload: Payload): Promise<User | null> {
    return this.chatService.findOneByEmail(payload.email);
  }
}

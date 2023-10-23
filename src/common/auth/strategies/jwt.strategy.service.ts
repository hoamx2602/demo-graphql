import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { MessageService } from 'src/message/message.service';
import { Payload } from '../dto/payload.dto';

import { publicKey } from 'src/common/utils/jwt.util';
import { User } from 'src/common/schema';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly configService: ConfigService,
    private readonly messageService: MessageService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: publicKey,
      algorithms: ['RS256'],
    });
  }

  async validate(payload: Payload): Promise<User | null> {
    return this.messageService.findOneByEmail(payload.email);
  }
}

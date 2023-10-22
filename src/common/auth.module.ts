import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from './config.module';
import { MessageModule } from '../message/message.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth/services/auth.service';
import { JwtStrategy } from './auth/strategies/jwt.strategy.service';

@Module({
  imports: [
    ConfigModule,
    forwardRef(() => MessageModule),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: configService.get<string>('JWT_EXPIRES_IN') },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}

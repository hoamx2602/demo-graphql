import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { UserHelper } from './helpers/user.helper';

@Module({
  imports: [CommonModule],
  providers: [UserResolver, UserService, UserHelper],
  exports: [UserService],
})
export class UserModule {}

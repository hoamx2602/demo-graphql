import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { AuthenticationService } from './authentication.service';
import { AuthenticationResolver } from './authenticaton.resolver';

@Module({
  imports: [CommonModule],
  providers: [AuthenticationResolver, AuthenticationService],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}

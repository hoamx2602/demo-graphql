import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ChatModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

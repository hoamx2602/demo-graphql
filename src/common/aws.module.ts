import { Module } from '@nestjs/common';
import { AwsService } from './aws/aws.service';

@Module({
  providers: [AwsService],
  exports: [AwsService],
})
export class AwsModule {}

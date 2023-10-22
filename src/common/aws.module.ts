import { AwsService } from 'libs/aws/src';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AwsService],
  exports: [MongooseModule, AwsService],
})
export class AwsModule {}

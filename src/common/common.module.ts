import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql.module';
import { ConfigModule } from './config.module';
import { MongoModule } from './mongo.module';
import { AuthModule } from './auth.module';
import { AwsModule } from './aws.module';

@Module({
  imports: [ConfigModule, GraphqlModule, MongoModule, AuthModule, AwsModule],
  exports: [ConfigModule, GraphqlModule, MongoModule, AuthModule, AwsModule],
})
export class CommonModule {}

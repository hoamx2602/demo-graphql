import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join('/tmp', 'schema.gql'),
      // autoSchemaFile: './schema.gql',
      driver: ApolloDriver,
      playground: true,
      installSubscriptionHandlers: true,
      // Use for set cookie
      // context: ({ req, res }) => ({ req, res }),
    }),
  ],
})
export class GraphqlModule {}

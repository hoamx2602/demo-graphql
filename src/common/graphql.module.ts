import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      // need it when deploy to vercel
      // autoSchemaFile: join('/tmp', 'schema.gql'),
      autoSchemaFile: './schema.gql',
      driver: ApolloDriver,
      playground: false,
      installSubscriptionHandlers: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      // Use for set cookie
      // context: ({ req, res }) => ({ req, res }),
    }),
  ],
})
export class GraphqlModule {}

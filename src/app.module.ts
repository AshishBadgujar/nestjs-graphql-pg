import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './resolvers/user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserSetting } from './entities/settings.entity';
import { UserService } from './services/user.service';
import { UserSettingService } from './services/setting.service';
import { UserSettingsResolver } from './resolvers/settings.resolver';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: 'src/schema.gql'
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: "postgres",
    password: 'password',
    database: 'graphql-postgres',
    entities: [User, UserSetting],
    synchronize: true
  }),
  TypeOrmModule.forFeature([User, UserSetting])
  ],

  controllers: [],
  providers: [
    UserResolver,
    UserService,
    UserSettingService,
    UserSettingsResolver],
})
export class AppModule { }

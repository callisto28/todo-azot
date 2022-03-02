import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';

import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';





@Module({
  imports: [
    // TypeOrmModule.forRoot(
    //   { type: 'sqlite', database: 'todo4.sqlite', entities: [User, Auth, Todo], synchronize: true }
    // ),
    TypeOrmModule.forRootAsync({ useFactory: async () => Object.assign(await getConnectionOptions(), { autoLoadEntities: true }) }),
    UsersModule,
    AuthModule,
    TodosModule
  ],
  controllers: [
    AuthController,
  ],
  providers: [
    AuthService

  ],
})
export class AppModule { }

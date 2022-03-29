/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';

import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';










@Module({
  imports: [
    AppModule,

    TypeOrmModule.forRootAsync({ useFactory: async () => Object.assign(await getConnectionOptions(), { autoLoadEntities: true }) }),
    UsersModule,
    AuthModule,
    TodosModule
  ],
  controllers: [
    AppController,],

  providers: [
    AppService,]


})
export class AppModule { }

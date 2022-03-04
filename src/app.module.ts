import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';

import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';










@Module({
  imports: [

    TypeOrmModule.forRootAsync({ useFactory: async () => Object.assign(await getConnectionOptions(), { autoLoadEntities: true }) }),
    UsersModule,
    AuthModule,
    TodosModule
  ],

})
export class AppModule { }

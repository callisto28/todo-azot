import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
// import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './schemas/todos.schema';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { User } from './schemas/users.schema';

@Module({
  imports: [
    TodosModule,
    TypeOrmModule.forRoot({ type: 'sqlite', database: 'todo1.sqlite', entities: [Todo, User], synchronize: true }),
    UsersModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { AuthModule } from './auth/auth.module';
import { TodosModule } from './todos/todos.module';
import { User } from './schemas/users.schema';
import { Todo } from './schemas/todos.schema';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TodosModule,
    TypeOrmModule.forRoot({ type: 'sqlite', database: 'todo1.sqlite', entities: [Todo, User], synchronize: true }),
    UsersModule,
    AuthModule,
  ],
  controllers: [
    // AppController,
    UsersController,
    AuthController],
  providers: [
    // AppService,
    UsersService,
    AuthService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
// import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './schemas/todos.schema';
// import { UsersService } from './users/users.service';
// import { UsersController } from './users/users.controller';
// import { UsersModule } from './users/users.module';

// import { User } from './users/schemas/users.schema';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TodosModule,

    TypeOrmModule.forRoot({ type: 'sqlite', database: 'todo1.sqlite', entities: [Todo], synchronize: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosController } from './todos.controller';
import { Todo } from '../schemas/todos.schema';
import { TodosService } from './todos.service';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { User } from 'src/schemas/users.schema';


@Module({

    imports: [TypeOrmModule.forFeature([Todo, User]), AuthModule],
    controllers: [TodosController],
    providers: [TodosService],
    exports: [TodosService],
})
export class TodosModule { }

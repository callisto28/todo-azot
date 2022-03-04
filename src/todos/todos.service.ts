import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { ITodo } from '../interface/todo.interface';
import { Todo } from '../schemas/todos.schema';
import { TodoDto } from './dto/create-todo.dto';
import { EditTodoDto } from './dto/edit-todo.dto';

@Injectable()
export class TodosService {
    constructor(@InjectRepository(Todo) private repo: Repository<ITodo>) { }



    async getTodos(userId: string,) {
        const todos = await this.repo.find({ where: { userId } });
        return todos;
    }

    async getTodoById(
        userId: string,
        todoId: string) {
        return await this.repo.findOne({ where: { userId, id: todoId } });
    }

    async createTodo(
        userId: string,
        body: TodoDto
    ) {
        const todo = await this.repo.save({ ...body, userId });
        return todo;
    }

    async patchTodo(
        userId: string,
        body: EditTodoDto,
        todoId: string
    ) {
        const todo = await this.repo.findOne({
            where: {
                id: todoId,
            }
        });
        if (!todo || todo.userId !== userId) {
            throw new ForbiddenException('access denied');
        };
        return this.repo.update({ id: todoId }, body);
    }


    async deleteTodo(
        userId: string,
        todoId: string
    ) {
        const todo = await this.repo.findOne({
            where: {
                id: todoId,
            }
        });
        if (!todo || todo.userId !== userId) {
            throw new ForbiddenException('access denied');
        };
        return this.repo.delete({ id: todoId });

    }


}

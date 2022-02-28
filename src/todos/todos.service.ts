import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ITodo } from '../interface/todo.interface';
import { Todo } from '../schemas/todos.schema';

@Injectable()
export class TodosService {
    constructor(@InjectRepository(Todo) private repo: Repository<ITodo>) { }

    create(body: any) {
        const todo = this.repo.create(body);
        return this.repo.save(todo);
    }
    findAll() {
        return this.repo.find();
    }
    findOne(id: string) {
        if (!id) return null;
        return this.repo.findOne(id);
    }
    patchTodo(id: string, body: any) {
        if (!id) return null;
        const todo = this.repo.create(body);
        return this.repo.save(todo);
    }
    async update(id: string) {
        const todo = await this.repo.findOne(id);
        todo.completed = !todo.completed;
        return this.repo.save({ ...todo, isCompleted: true });
    }

}

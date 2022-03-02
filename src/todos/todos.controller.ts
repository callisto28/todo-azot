import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ITodo } from '../interface/todo.interface';
import { TodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';

@Controller('todo')
export class TodosController {

    constructor(private todoservice: TodosService) { }

    @Post('/create')
    createTodo(@Body() body: TodoDto) {
        console.log(body, 'Create Todo');
        return this.todoservice.create(body);

    }
    @Get()
    getTodos(): Promise<ITodo[]> {
        console.log('list of todo');
        return this.todoservice.findAll();
    }

    @Get('/:id') getTodoById(@Param('id') id: string) {
        console.log(id, 'Get Todo By Id');
        return this.todoservice.findOne(id);
    }

    @Patch('/:id') patchTodo(@Param('id') id: string, @Body() body: TodoDto) {
        console.log(id, body, 'Patch Todo');
        return this.todoservice.patchTodo(id, body);
    }
}


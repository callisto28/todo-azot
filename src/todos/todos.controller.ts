import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { TodoDto } from './dto/create-todo.dto';
import { EditTodoDto } from './dto/edit-todo.dto';
import { TodosService } from './todos.service';


@UseGuards(JwtGuard)
@Controller('todo')
export class TodosController {

    constructor(private todoservice: TodosService) { }

    @Get()
    getTodos(@GetUser('id') userId: string) {

        return this.todoservice.getTodos(userId);
    }

    @Get('/:id')
    getTodoById(
        @GetUser('id') userId: string,
        @Param('id', ParseIntPipe) todoId: string) {
        return this.todoservice.getTodoById(userId, todoId);
    }

    @Post('/create')
    createTodo(
        @GetUser('id') userId: string,
        @Body() body: TodoDto) {
        return this.todoservice.createTodo(userId, body);
    }

    @Patch('/:id')
    patchTodo(
        @GetUser('id') userId: string,
        @Param('id', ParseIntPipe) todoId: string,
        @Body() body: EditTodoDto) {
        return this.todoservice.patchTodo(userId, body, todoId);

    }

    @Delete('/:id')
    deleteTodo(
        @GetUser('id') userId: string,
        @Param('id', ParseIntPipe) todoId: string) {
        return this.todoservice.deleteTodo(userId, todoId);
    }
}


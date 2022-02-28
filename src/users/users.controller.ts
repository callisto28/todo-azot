import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Post()
    createUser(@Body() body: any) {
        console.log(body, 'Create User');

        return 'This action adds a new user.';
    }
    @Get()
    getUsers() {
        console.log('list of users');

        return 'This action returns all users.';
    }
    @Get('/:id')


    getUserByIde(@Param('id') id: string) {
        console.log(id, 'Get User By Id');
        return `This action returns a #${id} user.`;
    }



}

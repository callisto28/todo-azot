import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { IAuth } from 'src/interface/auth.interface';
import { Iuser } from 'src/interface/user.interface';
import { userDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Get('/users')
    async getUsers(): Promise<IAuth[]> {
        console.log('list of users');
        return await this.userService.userAll();
    }
    @Get('user/:id')
    async getUserByIde(@Param('id') id: string) {
        console.log(id, 'Get User By Id');
        return await this.userService.userOne(id);
    }
    @Patch('/:id')
    async patchUser(@Param('id') id: string, @Body() body: userDto) {
        console.log(id, body, 'Patch User');
        return await this.userService.userPatch(id, body);
    }
    @Delete('/:id')
    async deleteUser(@Param('id') id: string) {
        console.log(id, 'Delete User');
        return await this.userService.userDelete(id);
    }



}

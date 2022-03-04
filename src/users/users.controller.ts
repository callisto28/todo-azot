import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from '@nestjs/common';

import { userDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';

import { User } from 'src/schemas/users.schema';

@UseGuards(JwtGuard)
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }


    @Get('/users')
    async getUsers(@GetUser() user: User[]) {
        return user;
    }
    @Get('user/:id')
    async getUserByIde(@Param('id') id: string) {
        return await this.userService.userOne(id);
    }
    @Patch('/:id')
    async patchUser(@Param('id') id: string, @Body() body: userDto) {
        return await this.userService.userPatch(id, body);
    }
    @Delete('/:id')
    async deleteUser(@Param('id') id: string) {
        return await this.userService.userDelete(id);
    }





}

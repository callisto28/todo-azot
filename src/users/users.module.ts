import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from 'src/schemas/auth.schema';
// import { User } from '../schemas/users.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    imports: [TypeOrmModule.forFeature([Auth])],
    controllers: [UsersController],
    providers: [UsersService]
})

export class UsersModule { }

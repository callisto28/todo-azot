import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from 'src/schemas/auth.schema';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [TypeOrmModule.forFeature([Auth])],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [TypeOrmModule]
})
export class AuthModule { }


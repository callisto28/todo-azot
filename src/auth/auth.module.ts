import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from 'src/schemas/auth.schema';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
    imports: [TypeOrmModule.forFeature([Auth]), JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '1h' }
    })

    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [TypeOrmModule, JwtModule]
})
export class AuthModule { }


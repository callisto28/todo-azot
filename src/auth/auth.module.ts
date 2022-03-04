import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategy';
import { User } from 'src/schemas/users.schema';

@Module({
    imports: [TypeOrmModule.forFeature([User]), JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '1h' }
    }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [TypeOrmModule, JwtModule]
})
export class AuthModule { }


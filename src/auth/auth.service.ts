import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from 'src/schemas/auth.schema';
import { Repository } from 'typeorm';
import { IAuth } from 'src/interface/auth.interface';

import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(@InjectRepository(Auth) private repo: Repository<IAuth>, private jwt: JwtService,

    ) { }
    async signup(dto: AuthDto) {
        const hash = await bcrypt.hashSync(dto.password, 10);
        const user = await this.repo.create({
            username: dto.username,
            password: hash,
            firstName: dto.firstname,
            lastName: dto.lastname
        });
        await this.repo.save(user);
        return user
    }


    async login(dto: AuthDto) {

        const user = await this.repo.findOne({ // findOne({username: dto.username})
            username: dto.username
        });
        console.log(user, 'userlogin');
        //check user is exist
        if (!user)
            throw new ForbiddenException('Invalid username  ');
        //compare password
        const matchPass = await bcrypt.compareSync(dto.password, user.password);
        //if not match
        if (!matchPass)
            throw new ForbiddenException('Invalid  password');
        //

        return this.signToken(user.id, user.username);
    }

    async signToken(userID: string, username: string): Promise<string> {

        const payload = {
            sub: userID,
            username
        }
        console.log(payload, 'payload');

        return this.jwt.sign(payload);
    }



}


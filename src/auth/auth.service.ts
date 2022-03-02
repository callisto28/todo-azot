import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from 'src/schemas/auth.schema';
import { Repository } from 'typeorm';
import { IAuth } from 'src/interface/auth.interface';
// import { userDto } from '../users/dto/create-user.dto';
// import { User } from '../schemas/users.schema';
// import { Iuser } from 'src/interface/user.interface';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(Auth) private repo: Repository<IAuth>) { }
    async signup(dto: AuthDto) {
        const hash = await bcrypt.hashSync(dto.password, 10);
        const user = await this.repo.create({
            username: dto.username,
            password: hash,
            firstName: dto.firstname,
            lastName: dto.lastname
        });
        await this.repo.save(user);
        return user;
    }


    async login(dto: AuthDto) {
        const user = await this.repo.findOne({
            username: dto.username
        });
        console.log(user, 'userlogin');
        if (!user)
            throw new ForbiddenException('Invalid username or password ');

        const matchPass = await bcrypt.compare(dto.password, user.password);
        if (!matchPass)
            throw new ForbiddenException('Invalid username or password');

        return user;
    }


}


import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/schemas/users.schema';
import { Iuser } from 'src/interface/user.interface';


@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private repo: Repository<Iuser>, private jwt: JwtService,

    ) { }
    async signup(dto: AuthDto) {
        const hash = await bcrypt.hashSync(dto.password, 10);
        const user = await this.repo.create({
            username: dto.username,
            password: hash,
            firstname: dto.firstname,
            lastname: dto.lastname
        });
        await this.repo.save(user);
        return user
    }


    async login(dto: AuthDto) {

        const user = await this.repo.findOne({
            username: dto.username
        });
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

    async signToken(userID: string, username: string): Promise<{ access_token: string }> {

        const payload = {
            sub: userID,
            username
        }
        const token = await this.jwt.sign(payload);

        return {
            access_token: token,
        }


    }



}


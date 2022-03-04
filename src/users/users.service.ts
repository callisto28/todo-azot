import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Iuser } from 'src/interface/user.interface';
import { User } from 'src/schemas/users.schema';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepo: Repository<Iuser>) { }


    async userOne(id: string) {
        if (!id) return null;
        return await this.userRepo.findOne(id);
    }
    async userPatch(id: string, body: any) {
        if (!id) return null;
        const user = this.userRepo.create(body);

        return await this.userRepo.save(user);
    }
    async userDelete(id: string) {
        if (!id) return null;
        return await this.userRepo.delete(id);
    }



}

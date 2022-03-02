import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IAuth } from 'src/interface/auth.interface';
import { Auth } from 'src/schemas/auth.schema';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {

    constructor(@InjectRepository(Auth) private userRepo: Repository<IAuth>) { }

    async userAll(): Promise<IAuth[]> {
        return await this.userRepo.find();
    }
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

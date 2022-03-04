import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Todo } from "./todos.schema";

@Entity()
export class User {
    static findOne(arg0: { where: { id: number; } }): User | PromiseLike<User> {
        throw new Error('Method not implemented.');
    }
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    username: string;
    @Column()
    password: string;
    @Column()
    firstname: string;
    @Column()
    lastname: string;

}



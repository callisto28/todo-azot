import { Validate } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Todo } from "./todos.schema";

@Entity()
export class Auth {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column('text')
    @Validate(Unique, { message: "username already exists" })
    username: string;
    @Column('text')
    password: string;
    @Column('text')
    firstName: string;
    @Column('text')
    lastName: string;
    @OneToMany(type => Todo, todo => todo.user)
    todos: Todo[];
}


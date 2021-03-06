import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    userName: string;
    @Column()
    password: string;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
}



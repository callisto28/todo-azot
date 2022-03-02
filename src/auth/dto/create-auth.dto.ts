import { IsNotEmpty, IsOptional, IsString, Validate } from "class-validator";
import { Unique } from "typeorm/decorator/Unique";


export class AuthDto {

    @IsNotEmpty()
    @IsString()
    @Validate(Unique, { message: "username already exists" })
    username: string;
    @IsNotEmpty()
    @IsString()
    password: string;
    @IsString()
    @IsNotEmpty()
    firstname: string;
    @IsString()
    @IsNotEmpty()
    lastname: string;
}



import { IsNotEmpty, IsOptional, IsString, isUUID } from "class-validator";

export class userDto {

    @IsNotEmpty()
    @IsString()
    username: string;
    @IsNotEmpty()
    @IsString()
    password: string;
    @IsString()
    @IsOptional()
    firstname: string;
    @IsString()
    @IsOptional()
    lastname: string;
}
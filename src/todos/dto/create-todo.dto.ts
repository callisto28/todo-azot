import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class TodoDto {
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsString()
    @IsOptional()
    description: string;
    @IsBoolean()
    completed?: boolean;
    // @IsString()
    // userId: string;
    // readonly title: string;
    // readonly description: string;
    // readonly completed: boolean;
    readonly userId: string;

}
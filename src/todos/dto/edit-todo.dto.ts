import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class EditTodoDto {
    @IsString()
    @IsOptional()
    title?: string;
    @IsString()
    @IsOptional()
    description?: string;
    @IsBoolean()
    completed: boolean;
    @IsString()
    userId: string;
}
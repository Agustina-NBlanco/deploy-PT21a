import { IsEmail, IsOptional, IsString } from "class-validator"

export class UpdateUserDto {

    @IsOptional()
    @IsEmail()
    email?: string

    @IsOptional()
    @IsString()
    name?: string


    @IsOptional()
    @IsString()
    password?: string

    @IsOptional()
    @IsString()
    address?: string

    @IsOptional()
    @IsString()
    phone?: string

    @IsOptional()
    @IsString()
    country?: string

    @IsOptional()
    @IsString()
    city?: string
}
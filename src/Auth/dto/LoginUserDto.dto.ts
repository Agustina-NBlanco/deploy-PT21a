import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto {
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        description: 'the email of the user',
        example: 'admin@gmail.com'
    })
    email: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'the password of the user',
        example: 'Admin123@'
    })
    password: string;
}
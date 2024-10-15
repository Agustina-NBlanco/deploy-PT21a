import { BadRequestException, Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./dto/LoginUserDto.dto";
import { AuthGuard } from "./AuthGuard.guard";
import { signupdto } from "./dto/signup.dto";
import { ApiTags } from "@nestjs/swagger";


@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('signin')
    async signInController(@Body() user: LoginUserDto) {
        // const { email, password } = user
        // const data = await this.authService.signInService(email, password)

        // if (!data) {
        //     return { message: "Email o contraseña incorrectos" }
        // }

        // return { message: "Login exitoso" }


        return await this.authService.signInService(user.email, user.password)
    }

    @Post('signup')
    async signUpController(@Body() user: signupdto) {
        if (user.password !== user.confirmPassword) {
            throw new BadRequestException('Las contraseñas no coinciden')
        }

        return await this.authService.signUpService(user)
    }

}




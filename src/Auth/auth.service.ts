import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "src/Users/users.service";
import { signupdto } from "./dto/signup.dto";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { Users } from "src/entities/users.entity";


@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) { }

    async signInService(email: string, password: string) {
        const user = await this.userService.findUserByEmailService(email)

        if (!user) {
            throw new UnauthorizedException('Email o contraseña incorrectos')
        }

        const isPasswordMatching = await bcrypt.compare(password, user.password)

        if (!isPasswordMatching) {
            throw new UnauthorizedException('Email o contraseña incorrectos')
        }

        const token = await this.createToken(user)
        return { token }


        // if (!user || user.password !== password) {
        //     throw new UnauthorizedException('Email o contraseña incorrectos')
        // }
        // return true


    }

    async signUpService(user: signupdto) {
        user.password = await bcrypt.hash(user.password, 10)

        const newUser = await this.userService.createUserService(user)

        return {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name,
            address: newUser.address,
            phone: newUser.phone,
            country: newUser.country,
            city: newUser.city
        }
    }

    private async createToken(user: Users) {
        const payload = { id: user.id, email: user.email, roles: user.admin}
        const token = await this.jwtService.signAsync(payload)
        return token
    }

}
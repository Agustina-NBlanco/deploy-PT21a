import { Injectable } from "@nestjs/common";
import { UsersService } from "src/Users/users.service";


@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService) { }

    async signInService(email: string, password: string) {
        const user = await this.userService.findUserByEmailService(email)

        if (!user || user.password !== password) {
            return false
        }

        return true
    }
}
import { Injectable } from "@nestjs/common";
import { UsersRepository } from "src/Users/users.repository";

@Injectable()
export class AuthService {

    constructor(private readonly userRepository: UsersRepository) { }

    async signInService(email: string, password: string) {
        const user = await this.userRepository.findUserRepository(email)

        if (!user || user.password !== password) {
            return false
        }

        return true
    }
}
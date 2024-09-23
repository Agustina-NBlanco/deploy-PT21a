import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";


function validateRequest(request: Request) {
    const authHeader = request.headers['authorization']
    if (!authHeader) {
        return false
    }

    const [type, credentials] = authHeader.split(' ')
    if (type !== 'Basic' || !credentials) {
        return false
    }

    const [email, password] = Buffer.from(credentials, 'base64').toString().split(':')
    if (!email || !password) {
        return false
    }

    return true

}

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request: Request = context.switchToHttp().getRequest()

        const authHeader = request.header('Authorization');
        if (!authHeader) {
            throw new HttpException('Not authorized', HttpStatus.UNAUTHORIZED)
        }

        const [type, credentials] = authHeader.split(' ')


        const decodedCredentials = Buffer.from(credentials, 'base64').toString('utf-8')
        const [email, password] = decodedCredentials.split(':')


        if (!email || !password) {
            throw new HttpException('Not authorized', HttpStatus.UNAUTHORIZED)
        }

        return true
    }

}
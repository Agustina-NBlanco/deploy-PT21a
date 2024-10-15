import { Test, TestingModule } from "@nestjs/testing"
import { UsersController } from "./users.controller"
import { UsersService } from "./users.service"
import { Users } from "src/entities/users.entity"
import { UserRole } from "./enum/role.enum"
import { Response } from "express"
import { AuthGuard } from "src/Auth/AuthGuard.guard"
import { RoleGuard } from "./roleGuard.guard"
import { JwtService } from "@nestjs/jwt"


describe('UsersController', () => {
    let controller: UsersController
    let service: UsersService

    const mockUser: Users = {
        id: '3478-9875-5559',
        name: 'Agustina Blanco',
        email: 'agus55@gmail.com',
        password: 'agus22@',
        phone: '5467890786',
        country: 'Argentina',
        address: 'Tucuman 55',
        city: 'Córdoba',
        orders: [],
        admin: UserRole.USER
    }

    beforeEach(async () => {
        const mockUsersService: Partial<UsersService> = {
            getUsersService: () => Promise.resolve([mockUser]),

        }

        const mockJwtService = {
            sign: jest.fn(() => 'token'),
            verify: jest.fn(() => ({ userId: 'asvf-asdf-asdf-asdf' }))
        }

        const mockAuthGuard = {
            canActivate: jest.fn(() => true),
        };

        const mockRoleGuard = {
            canActivate: jest.fn(() => true),
        };

        const module: TestingModule = await Test.createTestingModule({

            controllers: [UsersController],

            providers: [{
                provide: UsersService,
                useValue: mockUsersService
            },
            {
                provide: JwtService,
                useValue: mockJwtService

            }
            ],

        }).overrideGuard(AuthGuard)
            .useValue(mockAuthGuard)
            .overrideGuard(RoleGuard)
            .useValue(mockRoleGuard)
            .compile()

        controller = module.get<UsersController>(UsersController)

        service = module.get<UsersService>(UsersService)

    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })

    it('should be defined and return a list of users', async () => {
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        } as unknown as Response

        await controller.getUsersController(1, 5, res)
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith([mockUser])

    })
})
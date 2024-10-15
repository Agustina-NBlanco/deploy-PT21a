import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service"
import { Users } from "src/entities/users.entity";
import { UserRole } from "./enum/role.enum";

describe('UsersService', () => {
    let service: UsersService;
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
        const mockUserService: Partial<UsersService> = {
            getUsersService: () => Promise.resolve([]),
            createUserService: () => Promise.resolve(mockUser)
        }

        const module: TestingModule = await Test.createTestingModule({
            providers: [UsersService, {
                provide: UsersService,
                useValue: mockUserService
            }]

        }).compile();
        service = module.get<UsersService>(UsersService)

    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })

    it('should be defined and return an Array', async () => {
        expect(service.getUsersService).toBeDefined()
        expect(await service.getUsersService(1, 10)).toEqual([])
    })

    it('should be defined and return an Object', async () => {
        expect(service.createUserService).toBeDefined()
        expect(await service.createUserService(mockUser)).toEqual(mockUser)
    })
}) 
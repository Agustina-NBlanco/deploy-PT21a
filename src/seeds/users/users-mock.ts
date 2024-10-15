import { UserRole } from "src/Users/enum/role.enum";




export const usersMock = [
    {
        "name": "Agustina Blanco",
        "email": "agus@gmail.com",
        "password": "AgusB1234@",
        "phone": "123456789",
        "country": "Argentina",
        "address": "Tucuman 55",
        "city": "Tucuman",
        "admin": UserRole.USER
    },

    {
        "name": "Agustina Admin",
        "email": "admin@gmail.com",
        "password": "Admin1234@",
        "phone": "123456580",
        "country": "Argentina",
        "address": "Tucuman 55",
        "city": "Tucuman",
        "admin": UserRole.ADMIN
    }
]
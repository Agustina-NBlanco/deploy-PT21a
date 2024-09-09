import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";


@Injectable()
export class UsersRepository {
    private users = [

        {
            id: 1,
            email: 'john.doe@example.com',
            name: 'John Doe',
            password: 'password123',
            address: '123 Elm Street',
            phone: '123-456-7890',
            country: 'USA',
            city: 'Springfield',
        },
        {
            id: 2,
            email: 'jane.smith@example.com',
            name: 'Jane Smith',
            password: 'securePass456',
            address: '456 Oak Avenue',
            phone: '234-567-8901',
            country: 'Canada',
            city: 'Toronto',
        },
        {
            id: 3,
            email: 'alice.jones@example.com',
            name: 'Alice Jones',
            password: 'myPass789',
            address: '789 Maple Lane',
            phone: '345-678-9012',
            country: 'UK',
            city: 'London',
        },
        {
            id: 4,
            email: 'bob.brown@example.com',
            name: 'Bob Brown',
            password: 'password987',
            address: '101 Pine Road',
            phone: '456-789-0123',
            country: 'Australia',
            city: 'Sydney',
        },
        {
            id: 5,
            email: 'bob.brown@example.com',
            name: 'Bob Brown',
            password: 'password987',
            address: '101 Pine Road',
            phone: '456-789-0123',
            country: 'Australia',
            city: 'Sydney',
        },
        {
            id: 6,
            email: 'bob.brown@example.com',
            name: 'Bob Brown',
            password: 'password987',
            address: '101 Pine Road',
            phone: '456-789-0123',
            country: 'Australia',
            city: 'Sydney',
        },
        {
            id: 7,
            email: 'bob.brown@example.com',
            name: 'Bob Brown',
            password: 'password987',
            address: '101 Pine Road',
            phone: '456-789-0123',
            country: 'Australia',
            city: 'Sydney',
        },
        {
            id: 8,
            email: 'bob.brown@example.com',
            name: 'Bob Brown',
            password: 'password987',
            address: '101 Pine Road',
            phone: '456-789-0123',
            country: 'Australia',
            city: 'Sydney',
        },
        {
            id: 9,
            email: 'bob.brown@example.com',
            name: 'Bob Brown',
            password: 'password987',
            address: '101 Pine Road',
            phone: '456-789-0123',
            country: 'Australia',
            city: 'Sydney',
        }


    ]

    async getUsersRepository(page: number, limit: number) {
        const startIndex = (page - 1) * limit
        const endIndex = (startIndex + limit)

        const usersWithoutPassword = this.users.map(user => {
            return {
                id: user.id,
                email: user.email,
                name: user.name,
                address: user.address,
                phone: user.phone,
                country: user.country,
                city: user.city
            }

        })

        return usersWithoutPassword.slice(startIndex, endIndex)
    }

    async getUserByIdRepository(id: number) {
        const user = this.users.find(user => user.id === id)
        const userWithoutPassword = {
            id: user.id,
            email: user.email,
            name: user.name,
            address: user.address,
            phone: user.phone,
            country: user.country,
            city: user.city
        }
        return userWithoutPassword
    }

    async createUserRepository(user: CreateUserDto) {
        const newUser = {
            id: this.users.length + 1,
            email: user.email,
            name: user.name,
            password: user.password,
            address: user.address,
            phone: user.phone,
            country: user.country,
            city: user.city
        }

        this.users.push(newUser)
        return newUser


    }

    async updateUserRepository(id: number, user: UpdateUserDto) {
        const updatedUser = this.users.find(user => user.id === id)

        if (!updatedUser) {
            return null
        }

        Object.assign(updatedUser, user)

        return updatedUser
    }

    async deleteUserRepository(id: number) {
        const deletedUser = this.users.find(user => user.id === id)
        this.users = this.users.filter(user => user.id !== id)
        return deletedUser
    }

    async findUserRepository(email: string) {
       return this.users.find(user => user.email === email)
       
    }
}
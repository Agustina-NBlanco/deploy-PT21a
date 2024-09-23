import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Orders } from "./orders.entity"



@Entity({
    name: 'users'
})
export class Users {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'varchar', length: 50, nullable: false })
    name: string

    @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
    email: string

    @Column({ type: 'varchar', length: 20, nullable: false })
    password: string

    @Column({ type: 'varchar' })
    phone: string

    @Column({ type: 'varchar', length: 50 })
    country: string

    @Column({ type: 'text' })
    address: string

    @Column({ type: 'varchar', length: 50 })
    city: string

    //Falta armar relación 1:N con orders*/
    @OneToMany(() => Orders, order => order.user)
    orders: Orders[]
}
import { TypeOrmModule } from '@nestjs/typeorm'


export const dataBaseConfig = TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: '',
    entities: [],
    synchronize: true,
    dropSchema: true,
    logging: true
})
import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UserModule } from './Users/users.module';
import { ProductsModule } from './Products/products.module';
import { AuthModule } from './Auth/auth.module';
import { dataBaseConfig } from './config/dataBase.config';

@Module({
  imports: [UserModule, ProductsModule, AuthModule,dataBaseConfig],
  controllers: [],
  providers: [],
})
export class AppModule { }

import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UserModule } from './Users/users.module';
import { ProductsModule } from './Products/products.module';
import { AuthModule } from './Auth/auth.module';

@Module({
  imports: [UserModule, ProductsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal } from './middlewares/loggerGlobal.middlewar';
import { ValidationPipe } from '@nestjs/common';
import { CategoriesSeed } from './seeds/categories/categories.seed';
import { ProductsSeed } from './seeds/products/products.seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.use(loggerGlobal)
  const categoriesSeed = app.get(CategoriesSeed)
  await categoriesSeed.seedCategories()
  console.log('Categorias Cargadas');

  const productSeed = app.get(ProductsSeed)
  await productSeed.seedProducts()
  console.log('Productos Cargados');
  

  await app.listen(3000);
}
bootstrap();

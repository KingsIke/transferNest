import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import {ValidationPipe}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  const PORT = process.env.PORT || 4501;
  app.enableCors({ origin: ['http://localhost:3000'], credentials: true });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  try {
    await app.listen(3001, () => {
      console.log(`Server on port : ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();

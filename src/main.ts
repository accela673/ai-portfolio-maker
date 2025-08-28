import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('AI Portfolio Maker')
    .setDescription('API for AI Portfolio Maker project')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'jwt-auth',
    )
    .build();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // удаляет лишние поля из тела запроса
      forbidNonWhitelisted: true, // выдаёт ошибку, если есть лишние поля
      transform: true, // преобразует данные к типам DTO
    }),
  );
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log('Server time:', new Date().toISOString());
  Logger.log(`🚀 App is running on: http://localhost:${PORT}`);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS ni barcha manzillar uchun ruxsat berish
  app.enableCors({
    origin: true, // Barcha manzillarga ruxsat
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Agar cookie yoki autentifikatsiya kerak bo'lsa
  });

  const configService = app.get(ConfigService);
  // const port = configService.get<number>('PORT') || 3000;
  const port = process.env.PORT || 3000;

  // Global prefix sifatida /api qo‘shish
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('My NestJS API')
    .setDescription('API dokumentatsiyasi')
    .setVersion('1.0')
    .addTag('API')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  await app.listen(port);
  console.log(
    `Application is running on port ${port}, Swagger is available at http://localhost:${port}/api`,
  );
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3001;
  const config = new DocumentBuilder()
    .setTitle('Sample APP')
    .setDescription('The Sample App API description')
    .setVersion('1.0')
    .addTag('Sample APP')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(PORT, () => console.log("Server is running on port 3001"));
}
bootstrap();

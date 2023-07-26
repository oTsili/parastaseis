import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.enableCors({
    origin: 'http://localhost:4300',
    // origin: 'eshop.esite.gr',
    methods: 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
    allowedHeaders:
      'X-Requested-With, Accept, Origin, Referer, User-Agent, Content-Type, Authorization, enctype',
    credentials: true,
  });
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

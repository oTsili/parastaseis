import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setGlobalPrefix('api');

  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
      // cookie: {
      //   maxAge: parseInt(process.env.MAX_AGE),
      // },
    }),
  );

  app.useStaticAssets(join(__dirname, '..', 'static'));

  app.enableCors({
    // origin: 'http://localhost:4300',
    origin: 'parastaseis.webroom.gr',
    methods: 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
    allowedHeaders:
      'X-Requested-With, Accept, Origin, Referer, User-Agent, Content-Type, Authorization, enctype',
    credentials: true,
  });
  await app.listen(5000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

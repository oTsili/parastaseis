import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    PassportModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

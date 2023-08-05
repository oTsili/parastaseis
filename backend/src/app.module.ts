import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './app/user/user.module';
import { TheatreModule } from './app/admin/theatre/theatre.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/parastaseis?authSource=admin',
    ),
    TheatreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

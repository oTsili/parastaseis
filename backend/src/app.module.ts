import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './app/user/user.module';
import { EventModule } from './app/event/event.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/parastaseis?authSource=admin',
    ),
    EventModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

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
   `${process.env['ME_CONFIG_MONGODB_URL']}/parastaseis?authSource=admin`,    ),
    EventModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

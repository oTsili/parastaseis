import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './app/user/user.module';
import { FileController } from './app/admin/file/file.controller';

@Module({
  imports: [
    UserModule,
    PassportModule,
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/parastaseis?authSource=admin',
    ),
  ],
  controllers: [AppController, FileController],
  providers: [AppService],
})
export class AppModule {}

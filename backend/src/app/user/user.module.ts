import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { AuthService } from './auth.service';
import { AuthGuard } from 'src/auth.guard';
import { User, UserSchema } from './schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from './user.service';
import { Shipping, shippingSchema } from './schemas/shipping.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: Shipping.name, schema: shippingSchema },
    ]),
    JwtModule.register({
      secret: 'P@ssw0rd', // Replace this with a strong secret key in production.
      signOptions: { expiresIn: '1h' }, // Token expiration time.
    }),
  ],
  controllers: [UserController],
  providers: [AuthService, AuthGuard, UserService],
})
export class UserModule {}

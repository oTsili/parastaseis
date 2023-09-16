import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Shipping, ShippingDocument } from './schemas/shipping.schema';
import { User, UserDocument } from './schemas/user.schema';
import { ResponseUserDto } from './dto/response-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Shipping.name) public shippingModel: Model<ShippingDocument>,
    @InjectModel(User.name) public userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async findTickets(user: string) {
    return this.shippingModel
      .find({ user })
      .populate('ticket')
      .populate('user', '-password -passwordConfirm')
      .populate({
        path: 'ticket',
        populate: {
          path: 'event',
          model: 'Event',
        },
      });
  }

  async findUser(username: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ username, password }).exec();
    return user;
  }
}

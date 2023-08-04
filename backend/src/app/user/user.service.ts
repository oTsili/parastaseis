import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Shipping, ShippingDocument } from './schemas/shipping.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Shipping.name) public shippingModel: Model<ShippingDocument>,
  ) {}
}

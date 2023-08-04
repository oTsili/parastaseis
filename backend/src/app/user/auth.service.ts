import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) public userModel: Model<UserDocument>,
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ username, password }).exec();
    return user;
  }

  generateAccessToken(user: User): string {
    return this.jwtService.sign({ sub: user._id.toString() });
  }
}

import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';

@Controller('user')
export class UserController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<{ accessToken: string }> {
    const user = await this.authService.validateUser(
      loginDto.username,
      loginDto.password,
    );
    console.log(loginDto);
    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    const accessToken = this.authService.generateAccessToken(user);
    console.log(user);
    return { accessToken };
  }

  @Post('signup')
  async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);
    const user = new this.authService.userModel(createUserDto);
    return user.save();
  }
}

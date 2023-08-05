import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Get,
  Req,
  Res,
  Session,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { CreateShippingDto } from './dto/create-shipping.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Session() session: Record<string, any>,
  ): Promise<{ user: User }> {
    const user = await this.authService.validateUser(
      loginDto.username,
      loginDto.password,
    );
    console.log(loginDto);
    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    const accessToken = this.authService.generateAccessToken(user);
    session.jwt = accessToken;

    console.log(user);
    return { user };
  }

  @Get('/logout')
  async signout(@Res() res, @Session() session: Record<string, any>) {
    session.jwt = null;
    return await res.status(HttpStatus.OK).json();
  }

  @Post('signup')
  async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);
    const user = new this.authService.userModel(createUserDto);
    return user.save();
  }

  @Get('isAuth')
  async validateAuth(
    @Req() req,
    @Res() res,
    @Session() session: Record<string, any>,
  ) {
    console.log(session);
    let isAuth = true;
    if (!session.jwt) {
      isAuth = false;
    }

    // console.log({ user: req.user });

    return await res.status(HttpStatus.OK).json(req.user);
  }

  @Post('/shipping')
  async registerShipping(@Body() createShippingDto: CreateShippingDto) {
    console.log(createShippingDto);
    const shipping = new this.userService.shippingModel(createShippingDto);
    // Create a new object with only the desired properties
    const responseObj = {
      firstname: shipping.firstname,
      lastname: shipping.lastname,
    };

    // Save the shipping object
    await shipping.save();

    return responseObj; // Send the filtered object to the frontend
  }
}

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
  Param,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { CreateShippingDto } from './dto/create-shipping.dto';
import { UserService } from './user.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ConfigService } from '@nestjs/config';
// import { RolesGuard } from './guards/role.guard';
// import { Roles } from './custom-decorators/role.decorator';
// import { Roles } from './custom-decorators/role.decorator';

@Controller('user')
export class UserController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @Post('login')
  async login(
    @Res() res,
    @Body() loginDto: LoginDto,
    // @Session() session: Record<string, any>,
  ): Promise<{ user: User }> {
    const user = await this.authService.validateUser(
      loginDto.username,
      loginDto.password,
    );

    // const { access_token } = await this.authService.login(user);
    const jwt = this.authService.createJwt(user);
    console.log({ jwt });

    this.authService.setJwtInCookie(jwt, res);

    console.log(res);

    return res.status(HttpStatus.OK).json(user);
  }

  @Get('/logout')
  async signout(@Res() res, @Session() session: Record<string, any>) {
    session.jwt = null;
    return await res.status(HttpStatus.OK).json();
  }

  @Post('signup')
  async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user = new this.authService.userModel(createUserDto);
    return user.save();
  }

  @UseGuards(JwtAuthGuard)
  @Get('isAuth')
  async validateAuth(
    @Req() req,
    @Res() res,
    // @Session() session: Record<string, any>,
  ) {
    // console.log({ session });
    // let isAuth = true;
    // if (!session.jwt) {
    //   // isAuth = false;
    //   return null;
    // }

    // console.log({ user: req.user });

    const jwt = req.cookies['jwt'];

    return await res.status(HttpStatus.OK).json(jwt);
  }

  @UseGuards(JwtAuthGuard)
  // @Roles('admin')
  @Get('isAdmin')
  async validateAdmin(@Req() req, @Res() res) {
    const payload = this.authService.decodeJwt(req.cookies['jwt']);

    console.log(payload);

    // // console.log({ user: req.user });
    const jwt = req.cookies['jwt'];
    const user = this.authService.decodeJwt(jwt);

    console.log({ user });

    if (user.role !== 'admin') {
      // isAuth = false;
      // return null;
      throw new UnauthorizedException('No admin');
    }

    return await res.status(HttpStatus.OK).json(jwt);
  }

  @Post('/shipping')
  async registerShipping(@Body() createShippingDto: CreateShippingDto) {
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

  @Get('/shipping/:user')
  async getShipping(@Req() req, @Res() res, @Param() param) {
    const user = param.user.replace(/"/g, '');

    const shippings = await this.userService.findTickets(user);

    // // Exclude the password field from each user object in the tickets array
    // const ticketsWithoutPasswords = tickets.map((ticket) => {
    //   const userWithoutPassword = { ...ticket.user };
    //   delete userWithoutPassword.password;
    //   return { ...ticket, user: userWithoutPassword };
    // });

    return res.status(HttpStatus.OK).json({ shippings });
  }
}

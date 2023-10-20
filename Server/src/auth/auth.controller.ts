import { 
  Body, 
  Controller, 
  Get,
  Request, 
  HttpException, 
  HttpStatus, 
  Post, 
  UseGuards, 
  HttpCode
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { SearchItemDto } from 'src/user/dto/searchItem.dto';
import { JwtGuard } from './guards/jwt.guard';
import { RegisterUserDto, LoginUserDto } from './dto/auth.dto';
import { ShoppingCartItemDto } from 'src/shopping-cart/dto/shoppingCartItem.dto';
import { Public } from 'src/decorators/public.decorator';

@Controller('auth')
export class AuthController {

  constructor(
    private userService: UserService,
    private authService: AuthService){}

  @Public()
  @Post('register') 
  async registerUser(@Body() dto: RegisterUserDto){
    return this.authService.signup(dto);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() dto: LoginUserDto){
    return await this.authService.login(dto);
  }

  
  @Post('addSearchItem')
  async addSearchItem(@Body() dto: SearchItemDto, @Request() req){
    try {
      return await this.userService.addSearchItem(dto, req.user.sub);
    } catch (error) {
      throw new HttpException('Error: '+error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  // For Testing Only
  @Get('UserProfile')
  getUserProfile(@Request() req){
    return req.user;
  }

}

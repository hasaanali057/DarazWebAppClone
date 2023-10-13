// Importing nestCommon modules
import { Body, Controller, Get, Post, Req } from "@nestjs/common";

// Importing AuthServices
import { AuthService } from "./auth.service";
import { Customer } from "./user.entity";

@Controller('auth')
export class AuthController {
  constructor(private readonly authServices: AuthService) {}

  @Get('signin')
  signIn(@Body() data: { emailPhone: string, password: string } ) {
    return this.authServices.getUser(data.emailPhone, data.password);
  }

  @Post('signup')
  signUp(): string {
    return this.authServices.addUser();
  }
}
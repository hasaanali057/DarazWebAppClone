// Importing nestCommon modules
import { Controller, Get, Post } from "@nestjs/common";

// Importing AuthServices
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(private readonly authServices: AuthService) {}

  @Get('signin')
  signIn() {
    return this.authServices.getUser();
  }

  @Post('signup')
  signUp(): string {
    return this.authServices.addUser();
  }
}
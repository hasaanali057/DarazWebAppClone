import { IsString } from "class-validator";

export class LoginUserDto{
  @IsString()
  email: string;

  @IsString()
  password: string;
}

export class RegisterUserDto{
  @IsString()
  name: string;
   
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  contact: string;
}
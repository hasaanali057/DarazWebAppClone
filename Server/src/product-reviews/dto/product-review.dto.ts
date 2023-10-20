import { IsString } from "class-validator";

export class CreateUserDto{
  @IsString()
  ratingValue: string;
   
  @IsString()
  comment: string;

  @IsString()
  password: string;

  @IsString()
  contact: string;
}
import { IsString } from "class-validator";

export class AddCatagoryDto{
  @IsString()
  catagoryName: string;
}
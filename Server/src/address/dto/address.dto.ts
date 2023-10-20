import { IsNumber, IsString } from "class-validator";

export class AddUserAddressDto{
  @IsNumber()
  houseNo: number;

  @IsNumber()
  streetNo: number;

  @IsString()
  address: string;

  @IsString()
  city: string;

  @IsString()
  postalCode: string;

  isdefault: boolean;
}
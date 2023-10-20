import { IsString } from "class-validator";

export class AddProductDto{
  @IsString()
  productName: string;
   
  @IsString()
  productDescription: string;

  @IsString()
  productImage: string;

  @IsString()
  CatagoryName: string;
  
}
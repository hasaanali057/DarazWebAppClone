import { IsNumber, Min } from "class-validator";

export class ShoppingCartItemDto {
  
  @Min(1)
  @IsNumber()
  quantity: number;

  @IsNumber()
  product_item_Id: number;
}
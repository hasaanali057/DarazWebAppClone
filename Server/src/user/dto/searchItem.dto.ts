import { IsDecimal, IsNumber, IsString } from "class-validator";

export class SearchItemDto{
  @IsString()
  searchItem: string;
}
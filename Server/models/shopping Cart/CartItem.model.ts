import { AutoIncrement, BelongsTo, Column, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Shopping_Cart } from "./Cart.model";
import { Product_Item } from "models/product/ProductItem.model";

@Table({
  timestamps: false,
  freezeTableName: true
})
export class Shopping_Cart_Item extends Model { 
 
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @ForeignKey(()=> Shopping_Cart)
  shopping_cart_iD: number;
  
  @BelongsTo(()=> Shopping_Cart)
  shopping_Cart: Shopping_Cart;

  @ForeignKey(()=> Product_Item)
  product_item_Id: number;
  
  @BelongsTo(()=> Product_Item)
  product_item: Product_Item;

  @Column
  quantity: number;

}
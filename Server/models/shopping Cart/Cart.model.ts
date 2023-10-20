import { AutoIncrement, BelongsTo, Column, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "../user/User.model";
import { Shopping_Cart_Item } from "./CartItem.model";

@Table({
  timestamps: false,
  freezeTableName: true
})
export class Shopping_Cart extends Model { 
 
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @ForeignKey(()=> User)
  userID: number

  @BelongsTo(()=> User)
  user: User

  @HasMany(()=> Shopping_Cart_Item)
  shopping_cart_item: Shopping_Cart_Item[];
}
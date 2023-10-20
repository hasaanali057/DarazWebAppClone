import { AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Product } from "./Product.model";
import { Variation } from "./Variations.model";

@Table({
  timestamps: false,
  freezeTableName: true
})
export class Catagory extends Model { 
 
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @Column
  CatagoryName: string;

  @HasMany(()=> Product)
  product: Product[];

  @HasMany(()=> Variation)
  variation: Variation[];
}
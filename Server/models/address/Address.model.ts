import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Shopping_Cart } from '../shopping Cart/Cart.model';
import { User } from 'models/user/User.model';
import { User_Address } from './UserAddress.model';


@Table({
  timestamps: false,
  freezeTableName: true
})
export class Address extends Model { 
 
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;
  
  @Column
  houseNo: number;

  @Column
  streetNo: number;

  @Column
  address: string;

  @Column
  city: string;

  @Column
  postalCode: string;

  @HasMany(()=> User_Address)
  user_address: User_Address[];

}
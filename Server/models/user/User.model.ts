import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { Shopping_Cart } from '../shopping Cart/Cart.model';
import { User_Address } from 'models/address/UserAddress.model';
import { User_Review } from 'models/userReviews/UserReview.model';
import { User_Search } from './UserSearch.model';


@Table({  
  timestamps: false,
  freezeTableName: true
})
export class User extends Model { 
 
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  contact: string;

  @HasMany(()=> User_Address)
  user_address: User_Address[]; 

  @HasMany(()=> Shopping_Cart)
  shopping_cart: Shopping_Cart[];

  @HasMany(()=> User_Review)
  user_review: User_Review[];

  @HasMany(()=> User_Search)
  user_Search: User_Search[];
}
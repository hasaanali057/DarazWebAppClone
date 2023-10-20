import { 
  Table, 
  Column, 
  Model,
  ForeignKey, 
  BelongsTo } from 'sequelize-typescript';
import { User } from 'models/user/User.model';
import { Address } from './Address.model';


@Table({
  timestamps: false,
  freezeTableName: true
})
export class User_Address extends Model { 
 
  @ForeignKey(()=> User)
  user_id: number;

  @BelongsTo(()=> User)
  user: User;

  @ForeignKey(()=> Address)
  address_id: number;

  @BelongsTo(()=> Address)
  address: Address;

  @Column({ defaultValue: true })
  isDefault: boolean;

}
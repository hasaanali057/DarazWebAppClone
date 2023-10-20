import { 
  Table, 
  Column, 
  Model, 
  PrimaryKey, 
  AutoIncrement, 
  HasMany, 
  BelongsTo, 
  ForeignKey
} from 'sequelize-typescript';
import { User } from './User.model';

@Table({
  timestamps: false,
  freezeTableName: true
})
export class User_Search extends Model { 
 
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @Column
  searchItem: string;

  @ForeignKey(()=> User)
  userId: number;

  @BelongsTo(()=> User)
  user: User;
}
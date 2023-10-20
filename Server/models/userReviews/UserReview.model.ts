import { 
  Table, 
  Column, 
  Model, 
  PrimaryKey, 
  AutoIncrement,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import { User } from 'models/user/User.model';
import { Order_Line } from 'models/order/OrderLine.model';


@Table({
  timestamps: false,
  freezeTableName: true
})
export class User_Review extends Model { 
 
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @ForeignKey(()=> User)
  user_id: number;
  
  @BelongsTo(()=> User)
  user: User;

  @ForeignKey(()=> Order_Line)
  ordered_product_id: number;

  @BelongsTo(()=> Order_Line)
  order_line: Order_Line;

  @Column
  ratingValue: string;

  @Column
  comment: string;

}
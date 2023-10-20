import { 
  Table, 
  Column, 
  Model, 
  PrimaryKey, 
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  HasMany
} from 'sequelize-typescript';
import { Product_Item } from 'models/product/ProductItem.model';
import { User_Review } from 'models/userReviews/UserReview.model';


@Table({
  timestamps: false,
  freezeTableName: true
})
export class Order_Line extends Model { 
 
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @ForeignKey(()=> Product_Item)
  product_item_id: number;

  @BelongsTo(()=> Product_Item)
  product_item: Product_Item;

  @Column
  quantity: number;

  @Column
  price: number;

  @HasMany(()=> User_Review)
  user_review: User_Review[];

}
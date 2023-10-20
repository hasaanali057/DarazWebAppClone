import { 
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  BelongsTo,
  ForeignKey,
  HasMany
} from 'sequelize-typescript';
import { Product } from './Product.model';
import { Shopping_Cart_Item } from 'models/shopping Cart/CartItem.model';


@Table({
  timestamps: false,
  freezeTableName: true
})
export class Product_Item extends Model { 
 
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @ForeignKey(()=> Product)
  proudctId: number;

  @BelongsTo(()=> Product)
  product: Product

  // Unique Product Itentification
  @Column
  SKU: string;
  
  @Column
  Quantity: number;
  
  @Column
  productItemImage: string;

  @Column
  price: number;

  @HasMany(()=>Shopping_Cart_Item)
  shopping_cart_item: Shopping_Cart_Item[];

}

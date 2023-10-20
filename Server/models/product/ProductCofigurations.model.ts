import { 
  Table,
  Model,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript';
import { Variation } from './Variations.model';
import { Variation_Options } from './VariationOptions.model';
import { Product_Item } from './ProductItem.model';


@Table({
  timestamps: false,
  freezeTableName: true
})
export class Product_Configuration extends Model { 
 
  @ForeignKey(() => Product_Item)
  product_Item_ID: number
  
  @BelongsTo(()=> Product_Item)
  product_Item: Product_Item;

  @ForeignKey(() => Variation_Options)
  variation_Options_ID: number
  
  @BelongsTo(()=> Variation)
  variation: Variation;
}

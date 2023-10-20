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
import { Catagory } from './Catagory.model';
import { Variation_Options } from './VariationOptions.model';


@Table({
  timestamps: false,
  freezeTableName: true
})
export class Variation extends Model { 
 
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @ForeignKey(() => Catagory)
  catagoryID: number
  
  @Column
  name: string;
  
  @BelongsTo(()=> Catagory)
  catagory: Catagory;

  @HasMany(()=> Variation_Options)
  variationOptions: Variation_Options[];
}

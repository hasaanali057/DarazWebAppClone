import { 
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript';
import { Catagory } from './Catagory.model';


@Table({
  timestamps: false,
  freezeTableName: true
})
export class Product extends Model { 
 
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @ForeignKey(() => Catagory)
  catagoryID: number
  
  @Column
  productName: string;

  @Column
  productDescription: string;

  @Column
  productImage: string;
  
  @BelongsTo(()=> Catagory)
  catagory: Catagory;
}

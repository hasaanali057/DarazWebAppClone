import { 
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript';
import { Variation } from './Variations.model';


@Table({
  timestamps: false,
  freezeTableName: true
})
export class Variation_Options extends Model { 
 
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @ForeignKey(() => Variation)
  variationID: number
  
  @Column
  name: string;
  
  @BelongsTo(()=> Variation)
  variation: Variation;
}

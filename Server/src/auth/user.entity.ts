import { Table, Column, Model, PrimaryKey, Unique, AutoIncrement, Default } from 'sequelize-typescript';


@Table({
  timestamps: false,
  freezeTableName: true
})
export class Customer extends Model {
 
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
}
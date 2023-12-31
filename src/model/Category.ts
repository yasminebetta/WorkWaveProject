import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: Category.CATEGORY_TABLE_NAME,
})
export class Category extends Model {
  public static CATEGORY_TABLE_NAME = "category" as string;
  public static CATEGORY_ID = "id" as string;
  public static CATEGORY_NAME = "name" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Category.CATEGORY_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: Category.CATEGORY_NAME,
  })
  name!: string;

 
}

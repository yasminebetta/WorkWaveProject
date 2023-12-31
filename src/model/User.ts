import { Model, Table, Column, DataType } from "sequelize-typescript";
import bcrypt from 'bcryptjs';

@Table({
  tableName: User.USER_TABLE_NAME,
})
export class User extends Model {
  public static USER_TABLE_NAME = "user" as string;
  public static USER_ID = "id" as string;
  public static USER_NAME = "name" as string;
  public static USER_PASSWORD = "password" as string;
  public static USER_EMAIL = "email" as string;
  public static USER_VERIFIED = false as boolean;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: User.USER_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: User.USER_NAME,
  })
  name!: string;

  @Column({
    type: DataType.STRING(100),
    field: User.USER_PASSWORD,
  })
  password!: string;
  @Column({
    type: DataType.STRING(100),
    field: User.USER_EMAIL,
  })
  email!: string;


 
}
 


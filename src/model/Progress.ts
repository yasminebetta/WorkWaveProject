import { Model, Table, Column, ForeignKey, DataType } from "sequelize-typescript";
import { User } from "./User";

@Table({
  tableName: Progress.PROGRESS_TABLE_NAME,
})
export class Progress extends Model {
  public static PROGRESS_TABLE_NAME = "progress" as string;
  public static PROGRESS_ID = "id" as string;
  public static ID_UTILISATEUR = "IDUtilisateur" as string;
  public static VALUE = "value" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Progress.PROGRESS_ID,
  })
  id!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: Progress.ID_UTILISATEUR,
  })
  IDUtilisateur!: number;

  @Column({
    type: DataType.INTEGER,
    validate: {
      min: 0,
      max: 100,
    },
    field: Progress.VALUE,
  })
  value!: number;
}

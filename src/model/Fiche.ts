import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./User";

@Table({
  tableName: "FicheApprentissage",
})
export class FicheApprentissage extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "IDFicheApprentissage",
  })
  IDFicheApprentissage!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: "IDUtilisateur",
  })
  IDUtilisateur!: number;

  @BelongsTo(() => User)
  utilisateur!: User;

  @Column({
    type: DataType.STRING(255),
    field: "Question",
  })
  Question!: string;

  @Column({
    type: DataType.STRING(255),
    field: "Reponse",
  })
  Reponse!: string;

  @Column({
    type: DataType.STRING(255),
    field: "Categorie",
  })
  Categorie!: string;

}

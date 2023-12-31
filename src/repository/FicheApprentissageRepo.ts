import { FicheApprentissage } from "../model/Fiche";

interface IFicheApprentissageRepo {
    save(ficheApprentissage: FicheApprentissage): Promise<void>;
    update(ficheApprentissage: FicheApprentissage): Promise<void>;
    delete(IDFicheApprentissage: number): Promise<void>;
    retrieveById(IDFicheApprentissage: number): Promise<FicheApprentissage>;
    retrieveAll(): Promise<FicheApprentissage[]>;
}

export class FicheApprentissageRepo implements IFicheApprentissageRepo {
    async save(ficheApprentissage: FicheApprentissage): Promise<void> {
        try {
            await FicheApprentissage.create({
                IDUtilisateur: ficheApprentissage.IDUtilisateur,
                Question: ficheApprentissage.Question,
                Reponse: ficheApprentissage.Reponse,
                Categorie: ficheApprentissage.Categorie,
            });
        } catch (error) {
            throw new Error("Failed to create FicheApprentissage!");
        }
    }

    async update(ficheApprentissage: FicheApprentissage): Promise<void> {
        try {
            const updatedFicheApprentissage = await FicheApprentissage.findOne({
                where: {
                    IDFicheApprentissage: ficheApprentissage.IDFicheApprentissage,
                },
            });

            if (!updatedFicheApprentissage) {
                throw new Error("FicheApprentissage not found!");
            }

            updatedFicheApprentissage.IDUtilisateur = ficheApprentissage.IDUtilisateur;
            updatedFicheApprentissage.Question = ficheApprentissage.Question;
            updatedFicheApprentissage.Reponse = ficheApprentissage.Reponse;
            updatedFicheApprentissage.Categorie = ficheApprentissage.Categorie;

            await updatedFicheApprentissage.save();
        } catch (error) {
            throw new Error("Failed to update FicheApprentissage!");
        }
    }

    async delete(IDFicheApprentissage: number): Promise<void> {
        try {
            const deletedFicheApprentissage = await FicheApprentissage.findOne({
                where: {
                    IDFicheApprentissage,
                },
            });

            if (!deletedFicheApprentissage) {
                throw new Error("FicheApprentissage not found!");
            }

            await deletedFicheApprentissage.destroy();
        } catch (error) {
            throw new Error("Failed to delete FicheApprentissage!");
        }
    }

    async retrieveById(IDFicheApprentissage: number): Promise<FicheApprentissage> {
        try {
            const ficheApprentissage = await FicheApprentissage.findOne({
                where: {
                    IDFicheApprentissage,
                },
            });

            if (!ficheApprentissage) {
                throw new Error("FicheApprentissage not found!");
            }

            return ficheApprentissage;
        } catch (error) {
            throw new Error("Failed to retrieve FicheApprentissage!");
        }
    }

    async retrieveAll(): Promise<FicheApprentissage[]> {
        try {
            return await FicheApprentissage.findAll();
        } catch (error) {
            throw new Error("Failed to retrieve FicheApprentissage!");
        }
    }
    async findByUserId(IDUtilisateur: number): Promise<FicheApprentissage[]> {
        try {
          return await FicheApprentissage.findAll({
            where: {
              IDUtilisateur: IDUtilisateur,
            },
          });
        } catch (error) {
          throw new Error("Failed to fetch FicheApprentissage by user ID!");
        }
      }
}

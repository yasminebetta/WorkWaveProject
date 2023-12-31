import { Request, Response } from "express";
import { FicheApprentissage } from "../model/Fiche";
import { FicheApprentissageRepo } from "../repository/FicheApprentissageRepo";

class FicheApprentissageController {
    async create(req: Request, res: Response) {
        try {
            const { IDUtilisateur, Question, Reponse, Categorie } = req.body;

            const newFicheApprentissage = new FicheApprentissage();
            newFicheApprentissage.IDUtilisateur = IDUtilisateur;
            newFicheApprentissage.Question = Question;
            newFicheApprentissage.Reponse = Reponse;
            newFicheApprentissage.Categorie = Categorie;

            await new FicheApprentissageRepo().save(newFicheApprentissage);

            res.status(201).json({
                status: "Created!",
                message: "Successfully created FicheApprentissage!",
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const IDFicheApprentissage = parseInt(req.params["IDFicheApprentissage"]);
            await new FicheApprentissageRepo().delete(IDFicheApprentissage);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully deleted FicheApprentissage!",
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const IDFicheApprentissage = parseInt(req.params["IDFicheApprentissage"]);
            const ficheApprentissage = await new FicheApprentissageRepo().retrieveById(IDFicheApprentissage);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched FicheApprentissage by ID!",
                data: ficheApprentissage,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const ficheApprentissages = await new FicheApprentissageRepo().retrieveAll();

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched all FicheApprentissage data!",
                data: ficheApprentissages,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const IDFicheApprentissage = parseInt(req.params["IDFicheApprentissage"]);
            const { IDUtilisateur, Question, Reponse, Categorie } = req.body;

            const updatedFicheApprentissage = new FicheApprentissage();
            updatedFicheApprentissage.IDFicheApprentissage = IDFicheApprentissage;
            updatedFicheApprentissage.IDUtilisateur = IDUtilisateur;
            updatedFicheApprentissage.Question = Question;
            updatedFicheApprentissage.Reponse = Reponse;
            updatedFicheApprentissage.Categorie = Categorie;

            await new FicheApprentissageRepo().update(updatedFicheApprentissage);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully updated FicheApprentissage data!",
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }
    // Other methods...

    async findByUserId(req: Request, res: Response): Promise<void> {
        try {
            const IDUtilisateur = parseInt(req.params["IDUtilisateur"]);
            const fiches = await new FicheApprentissageRepo().findByUserId(IDUtilisateur);

            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched FicheApprentissage by user ID!",
                data: fiches,
            });
        } catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!",
            });
        }
    }
    async getQuestionsByCategory(req: Request, res: Response) {
        try {
             var categoryName  = req.params["categoryname"];

            // Find questions based on the selected category name
            const questions = await FicheApprentissage.findAll({
                attributes: ['IDFicheApprentissage', 'Question', 'Reponse'],
                where: {
                    Categorie: categoryName,
                },
            });

            if (questions.length > 0) {
                res.status(200).json({
                    status: 'success',
                    message: 'Questions fetched successfully',
                    data: questions,
                });
            } else {
                res.status(404).json({
                    status: 'error',
                    message: 'No questions found for the specified category',
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Internal Server Error',
            });
        }
    }
}

export default new FicheApprentissageController();

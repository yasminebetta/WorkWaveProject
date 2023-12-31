"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Fiche_1 = require("../model/Fiche");
const FicheApprentissageRepo_1 = require("../repository/FicheApprentissageRepo");
class FicheApprentissageController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { IDUtilisateur, Question, Reponse, Categorie } = req.body;
                const newFicheApprentissage = new Fiche_1.FicheApprentissage();
                newFicheApprentissage.IDUtilisateur = IDUtilisateur;
                newFicheApprentissage.Question = Question;
                newFicheApprentissage.Reponse = Reponse;
                newFicheApprentissage.Categorie = Categorie;
                yield new FicheApprentissageRepo_1.FicheApprentissageRepo().save(newFicheApprentissage);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created FicheApprentissage!",
                });
            }
            catch (err) {
                console.error(err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const IDFicheApprentissage = parseInt(req.params["IDFicheApprentissage"]);
                yield new FicheApprentissageRepo_1.FicheApprentissageRepo().delete(IDFicheApprentissage);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted FicheApprentissage!",
                });
            }
            catch (err) {
                console.error(err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const IDFicheApprentissage = parseInt(req.params["IDFicheApprentissage"]);
                const ficheApprentissage = yield new FicheApprentissageRepo_1.FicheApprentissageRepo().retrieveById(IDFicheApprentissage);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched FicheApprentissage by ID!",
                    data: ficheApprentissage,
                });
            }
            catch (err) {
                console.error(err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ficheApprentissages = yield new FicheApprentissageRepo_1.FicheApprentissageRepo().retrieveAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all FicheApprentissage data!",
                    data: ficheApprentissages,
                });
            }
            catch (err) {
                console.error(err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const IDFicheApprentissage = parseInt(req.params["IDFicheApprentissage"]);
                const { IDUtilisateur, Question, Reponse, Categorie } = req.body;
                const updatedFicheApprentissage = new Fiche_1.FicheApprentissage();
                updatedFicheApprentissage.IDFicheApprentissage = IDFicheApprentissage;
                updatedFicheApprentissage.IDUtilisateur = IDUtilisateur;
                updatedFicheApprentissage.Question = Question;
                updatedFicheApprentissage.Reponse = Reponse;
                updatedFicheApprentissage.Categorie = Categorie;
                yield new FicheApprentissageRepo_1.FicheApprentissageRepo().update(updatedFicheApprentissage);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated FicheApprentissage data!",
                });
            }
            catch (err) {
                console.error(err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    // Other methods...
    findByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const IDUtilisateur = parseInt(req.params["IDUtilisateur"]);
                const fiches = yield new FicheApprentissageRepo_1.FicheApprentissageRepo().findByUserId(IDUtilisateur);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched FicheApprentissage by user ID!",
                    data: fiches,
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    getQuestionsByCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var categoryName = req.params["categoryname"];
                // Find questions based on the selected category name
                const questions = yield Fiche_1.FicheApprentissage.findAll({
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
                }
                else {
                    res.status(404).json({
                        status: 'error',
                        message: 'No questions found for the specified category',
                    });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    status: 'error',
                    message: 'Internal Server Error',
                });
            }
        });
    }
}
exports.default = new FicheApprentissageController();

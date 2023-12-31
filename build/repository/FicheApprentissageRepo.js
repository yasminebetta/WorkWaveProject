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
exports.FicheApprentissageRepo = void 0;
const Fiche_1 = require("../model/Fiche");
class FicheApprentissageRepo {
    save(ficheApprentissage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Fiche_1.FicheApprentissage.create({
                    IDUtilisateur: ficheApprentissage.IDUtilisateur,
                    Question: ficheApprentissage.Question,
                    Reponse: ficheApprentissage.Reponse,
                    Categorie: ficheApprentissage.Categorie,
                });
            }
            catch (error) {
                throw new Error("Failed to create FicheApprentissage!");
            }
        });
    }
    update(ficheApprentissage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedFicheApprentissage = yield Fiche_1.FicheApprentissage.findOne({
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
                yield updatedFicheApprentissage.save();
            }
            catch (error) {
                throw new Error("Failed to update FicheApprentissage!");
            }
        });
    }
    delete(IDFicheApprentissage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedFicheApprentissage = yield Fiche_1.FicheApprentissage.findOne({
                    where: {
                        IDFicheApprentissage,
                    },
                });
                if (!deletedFicheApprentissage) {
                    throw new Error("FicheApprentissage not found!");
                }
                yield deletedFicheApprentissage.destroy();
            }
            catch (error) {
                throw new Error("Failed to delete FicheApprentissage!");
            }
        });
    }
    retrieveById(IDFicheApprentissage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ficheApprentissage = yield Fiche_1.FicheApprentissage.findOne({
                    where: {
                        IDFicheApprentissage,
                    },
                });
                if (!ficheApprentissage) {
                    throw new Error("FicheApprentissage not found!");
                }
                return ficheApprentissage;
            }
            catch (error) {
                throw new Error("Failed to retrieve FicheApprentissage!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Fiche_1.FicheApprentissage.findAll();
            }
            catch (error) {
                throw new Error("Failed to retrieve FicheApprentissage!");
            }
        });
    }
    findByUserId(IDUtilisateur) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Fiche_1.FicheApprentissage.findAll({
                    where: {
                        IDUtilisateur: IDUtilisateur,
                    },
                });
            }
            catch (error) {
                throw new Error("Failed to fetch FicheApprentissage by user ID!");
            }
        });
    }
}
exports.FicheApprentissageRepo = FicheApprentissageRepo;

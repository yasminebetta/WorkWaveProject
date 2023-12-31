"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const FicheApprentissageController_1 = __importDefault(require("../controller/FicheApprentissageController"));
class FicheApprentissageRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("", FicheApprentissageController_1.default.create);
        this.router.patch("/:IDFicheApprentissage", FicheApprentissageController_1.default.update);
        this.router.delete("/:IDFicheApprentissage", FicheApprentissageController_1.default.delete);
        this.router.get("", FicheApprentissageController_1.default.findAll);
        this.router.get("/:IDFicheApprentissage", FicheApprentissageController_1.default.findById);
        this.router.get("/user/:IDUtilisateur", FicheApprentissageController_1.default.findByUserId);
        this.router.get('/category/:categoryname', FicheApprentissageController_1.default.getQuestionsByCategory);
    }
}
exports.default = new FicheApprentissageRoutes().router;

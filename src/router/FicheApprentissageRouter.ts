import BaseRoutes from "./base/BaseRouter";
import FicheApprentissageController from "../controller/FicheApprentissageController";

class FicheApprentissageRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post("", FicheApprentissageController.create);
        this.router.patch("/:IDFicheApprentissage", FicheApprentissageController.update);
        this.router.delete("/:IDFicheApprentissage", FicheApprentissageController.delete);
        this.router.get("", FicheApprentissageController.findAll);
        this.router.get("/:IDFicheApprentissage", FicheApprentissageController.findById);
        this.router.get("/user/:IDUtilisateur", FicheApprentissageController.findByUserId);
        this.router.get('/category/:categoryname', FicheApprentissageController.getQuestionsByCategory);

    }
}

export default new FicheApprentissageRoutes().router;

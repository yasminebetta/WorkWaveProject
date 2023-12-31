import BaseRoutes from "./base/BaseRouter";
import ProgressController from "../controller/ProgressController";

class ProgressRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post("", ProgressController.create);
        this.router.patch("/:id", ProgressController.update);
        this.router.delete("/:id", ProgressController.delete);
        this.router.get("", ProgressController.findAll);
        this.router.get("/:id", ProgressController.findById);
        // Add the new route to fetch progress by user ID
        this.router.get("/user/:id", ProgressController.findByUserId);

    }
}

export default new ProgressRoutes().router;

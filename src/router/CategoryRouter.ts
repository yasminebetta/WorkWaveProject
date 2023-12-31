import BaseRoutes from "./base/BaseRouter";
import CategoryController from "../controller/CategoryController";
import validate from "../helper/validate";

class CategoryRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("", CategoryController.create);
    this.router.patch(
      "/:id",
      CategoryController.update
    );
    this.router.delete("/:id", CategoryController.delete);
    this.router.get("", CategoryController.findAll);
    this.router.get("/:id", CategoryController.findById);
    this.router.get("/name/:name", CategoryController.findCategoryByName);
  }
}

export default new CategoryRoutes().router
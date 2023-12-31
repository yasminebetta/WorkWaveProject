import BaseRoutes from "./base/BaseRouter";
import UserController from "../controller/UserController";
import UserMiddleware from "../middleware/userAuth"
class UserRoutes extends BaseRoutes {
  public routes(): void {

    this.router.post("/login", UserController.login);
    this.router.get("/",UserController.findAll);
    this.router.post("/signup", UserMiddleware.saveUser, UserController.signup);

  }
}

export default new UserRoutes().router
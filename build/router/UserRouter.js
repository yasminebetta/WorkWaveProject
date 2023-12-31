"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const UserController_1 = __importDefault(require("../controller/UserController"));
const userAuth_1 = __importDefault(require("../middleware/userAuth"));
class UserRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("/login", UserController_1.default.login);
        this.router.get("/", UserController_1.default.findAll);
        this.router.post("/signup", userAuth_1.default.saveUser, UserController_1.default.signup);
    }
}
exports.default = new UserRoutes().router;

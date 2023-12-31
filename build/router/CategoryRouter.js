"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const CategoryController_1 = __importDefault(require("../controller/CategoryController"));
class CategoryRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("", CategoryController_1.default.create);
        this.router.patch("/:id", CategoryController_1.default.update);
        this.router.delete("/:id", CategoryController_1.default.delete);
        this.router.get("", CategoryController_1.default.findAll);
        this.router.get("/:id", CategoryController_1.default.findById);
        this.router.get("/name/:name", CategoryController_1.default.findCategoryByName);
    }
}
exports.default = new CategoryRoutes().router;

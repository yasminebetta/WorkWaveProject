"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const ProgressController_1 = __importDefault(require("../controller/ProgressController"));
class ProgressRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("", ProgressController_1.default.create);
        this.router.patch("/:id", ProgressController_1.default.update);
        this.router.delete("/:id", ProgressController_1.default.delete);
        this.router.get("", ProgressController_1.default.findAll);
        this.router.get("/:id", ProgressController_1.default.findById);
        // Add the new route to fetch progress by user ID
        this.router.get("/user/:id", ProgressController_1.default.findByUserId);
    }
}
exports.default = new ProgressRoutes().router;

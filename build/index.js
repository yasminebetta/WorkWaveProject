"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const NoteRouter_1 = __importDefault(require("./router/NoteRouter"));
const CategoryRouter_1 = __importDefault(require("./router/CategoryRouter"));
const UserRouter_1 = __importDefault(require("./router/UserRouter"));
const FicheApprentissageRouter_1 = __importDefault(require("./router/FicheApprentissageRouter"));
const ProgressRouter_1 = __importDefault(require("./router/ProgressRouter"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.databaseSync();
        this.plugins();
        this.routes();
    }
    plugins() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        // Enhance CORS handling
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
            // Handle preflight requests
            if (req.method === 'OPTIONS') {
                res.sendStatus(200);
            }
            else {
                next();
            }
        });
    }
    databaseSync() {
        var _a;
        const db = new database_1.default();
        (_a = db.sequelize) === null || _a === void 0 ? void 0 : _a.sync();
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("welcome home");
        });
        this.app.use("/api/v1/note", NoteRouter_1.default);
        this.app.use("/api/v1/category", CategoryRouter_1.default);
        this.app.use("/api/v1/user", UserRouter_1.default);
        this.app.use("/api/v1/fiche", FicheApprentissageRouter_1.default);
        this.app.use("/api/v1/progress", ProgressRouter_1.default);
    }
}
const port = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log("✅ Server started successfully on port " + port);
});

import express, { Application, Request, Response } from "express";
import Database from "./config/database";
import NoteRouter from "./router/NoteRouter";
import CategoryRouter from "./router/CategoryRouter";
import UserRouter from "./router/UserRouter";
import FicheApprentissageRouter from "./router/FicheApprentissageRouter";
import ProgressRouter from "./router/ProgressRouter";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.databaseSync();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // Enhance CORS handling
    this.app.use((req: Request, res: Response, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");

      // Handle preflight requests
      if (req.method === 'OPTIONS') {
        res.sendStatus(200);
      } else {
        next();
      }
    });
  }

  protected databaseSync(): void {
    const db = new Database();
    db.sequelize?.sync();
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("welcome home");
    });
    this.app.use("/api/v1/note", NoteRouter);
    this.app.use("/api/v1/category", CategoryRouter);
    this.app.use("/api/v1/user", UserRouter);
    this.app.use("/api/v1/fiche", FicheApprentissageRouter);
    this.app.use("/api/v1/progress", ProgressRouter);
  }
}

const port: number = 8000;
const app = new App().app;
app.listen(port, () => {
  console.log("✅ Server started successfully on port " + port);
});

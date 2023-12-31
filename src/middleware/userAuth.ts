import { Request, Response, NextFunction } from "express";
import { User } from "../model/User";

class UserMiddleware {
  private User = User;

  public saveUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // Search the database to see if the username exists
      const username = await this.User.findOne({
        where: {
          name: req.body.name,
        },
      });

      // If the username exists, respond with a status of 409
      if (username) {
        res.status(409).send("Username already taken");
        return;
      }

      // Checking if email already exists
      const emailCheck = await this.User.findOne({
        where: {
          email: req.body.email,
        },
      });

      // If the email exists, respond with a status of 409
      if (emailCheck) {
        res.status(409).send("Email already taken");
        return;
      }

      next();
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  };
}

export default new UserMiddleware();

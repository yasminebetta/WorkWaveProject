import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../model/User";
import { UserRepo } from "../repository/UserRepo";
 

class AuthController {
  async signup(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const data = {
        name,
        email,
        password: await bcrypt.hash(password, 10),
      };

      const user = await User.create(data);

      if (user) {
        const token = jwt.sign({ id: user.id }, "aa", {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        console.log("user", JSON.stringify(user, null, 2));
        console.log(token);

        return res.status(201).send(user);
      } else {
        return res.status(409).send("Details are not correct");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
  
      if (user) {
        const isSame = await bcrypt.compare(password, user.password);
  
        if (isSame) {
          const token = jwt.sign({ id: user.id }, "aa", {
            expiresIn: 1 * 24 * 60 * 60 * 1000,
          });
  
          // Pass the token in the response
          res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
          
          // Include the token in the response body
          return res.status(201).json({
            user: user,
            token: token,
          });
        } else {
          return res.status(401).send("Authentication failed");
        }
      } else {
        return res.status(401).send("Authentication failed");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
  
  async findAll(req: Request, res: Response) {
    try {
      const new_note = await new UserRepo().retrieveAll();

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all user data!",
        data: new_note,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

}

export default new AuthController();

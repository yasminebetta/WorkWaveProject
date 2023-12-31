"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../model/User");
class UserMiddleware {
    constructor() {
        this.User = User_1.User;
        this.saveUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                // Search the database to see if the username exists
                const username = yield this.User.findOne({
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
                const emailCheck = yield this.User.findOne({
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
            }
            catch (error) {
                console.log(error);
                res.status(500).send("Internal Server Error");
            }
        });
    }
}
exports.default = new UserMiddleware();

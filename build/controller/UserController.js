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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../model/User");
const UserRepo_1 = require("../repository/UserRepo");
class AuthController {
    signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                const data = {
                    name,
                    email,
                    password: yield bcryptjs_1.default.hash(password, 10),
                };
                const user = yield User_1.User.create(data);
                if (user) {
                    const token = jsonwebtoken_1.default.sign({ id: user.id }, "aa", {
                        expiresIn: 1 * 24 * 60 * 60 * 1000,
                    });
                    res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
                    console.log("user", JSON.stringify(user, null, 2));
                    console.log(token);
                    return res.status(201).send(user);
                }
                else {
                    return res.status(409).send("Details are not correct");
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).send("Internal Server Error");
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const user = yield User_1.User.findOne({
                    where: {
                        email: email,
                    },
                });
                if (user) {
                    const isSame = yield bcryptjs_1.default.compare(password, user.password);
                    if (isSame) {
                        const token = jsonwebtoken_1.default.sign({ id: user.id }, "aa", {
                            expiresIn: 1 * 24 * 60 * 60 * 1000,
                        });
                        // Pass the token in the response
                        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
                        // Include the token in the response body
                        return res.status(201).json({
                            user: user,
                            token: token,
                        });
                    }
                    else {
                        return res.status(401).send("Authentication failed");
                    }
                }
                else {
                    return res.status(401).send("Authentication failed");
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).send("Internal Server Error");
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_note = yield new UserRepo_1.UserRepo().retrieveAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all user data!",
                    data: new_note,
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
}
exports.default = new AuthController();

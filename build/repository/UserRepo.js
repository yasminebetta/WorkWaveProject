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
exports.UserRepo = void 0;
const User_1 = require("../model/User");
class UserRepo {
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield User_1.User.create({
                    name: User_1.User.name,
                });
            }
            catch (error) {
                throw new Error("Failed to create note!");
            }
        });
    }
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_category = yield User_1.User.findOne({
                    where: {
                        id: user.id,
                    },
                });
                if (!new_category) {
                    throw new Error("Note not found!");
                }
                new_category.name = user.name;
                yield new_category.save();
            }
            catch (error) {
                throw new Error("Failed to create note!");
            }
        });
    }
    delete(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_category = yield User_1.User.findOne({
                    where: {
                        id: categoryId,
                    },
                });
                if (!new_category) {
                    throw new Error("Note not found!");
                }
                yield new_category.destroy();
            }
            catch (error) {
                throw new Error("Failed to create note!");
            }
        });
    }
    retrieveById(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_category = yield User_1.User.findOne({
                    where: {
                        id: categoryId,
                    },
                });
                if (!new_category) {
                    throw new Error("Note not found!");
                }
                return new_category;
            }
            catch (error) {
                throw new Error("Failed to create note!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield User_1.User.findAll();
            }
            catch (error) {
                throw new Error("Failed to create note!");
            }
        });
    }
}
exports.UserRepo = UserRepo;

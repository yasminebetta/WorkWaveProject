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
exports.CategoryRepo = void 0;
const Category_1 = require("../model/Category");
class CategoryRepo {
    save(category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Category_1.Category.create({
                    name: category.name,
                });
            }
            catch (error) {
                throw new Error("Failed to create note!");
            }
        });
    }
    update(category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_category = yield Category_1.Category.findOne({
                    where: {
                        id: category.id,
                    },
                });
                if (!new_category) {
                    throw new Error("Note not found!");
                }
                new_category.name = category.name;
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
                const new_category = yield Category_1.Category.findOne({
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
                const new_category = yield Category_1.Category.findOne({
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
                return yield Category_1.Category.findAll();
            }
            catch (error) {
                throw new Error("Failed to create note!");
            }
        });
    }
}
exports.CategoryRepo = CategoryRepo;

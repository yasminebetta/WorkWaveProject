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
const Category_1 = require("../model/Category");
const CategoryRepo_1 = require("../repository/CategoryRepo");
class CategoryController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_note = new Category_1.Category();
                new_note.name = req.body.name;
                yield new CategoryRepo_1.CategoryRepo().save(new_note);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created Category!",
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
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                yield new CategoryRepo_1.CategoryRepo().delete(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted note!",
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
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                const new_note = yield new CategoryRepo_1.CategoryRepo().retrieveById(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched note by id!",
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
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_note = yield new CategoryRepo_1.CategoryRepo().retrieveAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all note data!",
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
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                const new_note = new Category_1.Category();
                new_note.id = id;
                new_note.name = req.body.name;
                yield new CategoryRepo_1.CategoryRepo().update(new_note);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated note data!",
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
    findCategoryByName(categoryName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield Category_1.Category.findOne({
                    where: {
                        name: categoryName,
                    },
                });
                return category;
            }
            catch (error) {
                console.error("Error finding category by name:", error);
                throw error;
            }
        });
    }
}
exports.default = new CategoryController();

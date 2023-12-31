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
const Progress_1 = require("../model/Progress");
const ProgressRepo_1 = require("../repository/ProgressRepo");
class ProgressController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { IDUtilisateur, value } = req.body;
                const progress = new Progress_1.Progress({ IDUtilisateur, value });
                yield new ProgressRepo_1.ProgressRepo().save(progress);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created progress entry!",
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
                const progressId = parseInt(req.params["id"]);
                yield new ProgressRepo_1.ProgressRepo().delete(progressId);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted progress entry!",
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
                const progressId = parseInt(req.params["id"]);
                const progress = yield new ProgressRepo_1.ProgressRepo().retrieveById(progressId);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched progress entry by ID!",
                    data: progress,
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
                const progressEntries = yield new ProgressRepo_1.ProgressRepo().retrieveAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all progress entries!",
                    data: progressEntries,
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
                const progressId = parseInt(req.params["id"]);
                const updatedProgress = new Progress_1.Progress({
                    id: progressId,
                    IDUtilisateur: req.body.IDUtilisateur,
                    value: req.body.value,
                });
                yield new ProgressRepo_1.ProgressRepo().update(updatedProgress);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated progress entry!",
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
    findByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = parseInt(req.params["id"]);
                const progressEntries = yield new ProgressRepo_1.ProgressRepo().findByUserId(userId);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched progress entries by user ID!",
                    data: progressEntries,
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
exports.default = new ProgressController();

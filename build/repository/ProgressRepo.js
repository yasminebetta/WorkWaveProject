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
exports.ProgressRepo = void 0;
const Progress_1 = require("../model/Progress");
class ProgressRepo {
    save(progress) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Progress_1.Progress.create({
                    IDUtilisateur: progress.IDUtilisateur,
                    value: progress.value,
                });
            }
            catch (error) {
                throw new Error("Failed to create progress entry!");
            }
        });
    }
    update(progress) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedProgress = yield Progress_1.Progress.findOne({
                    where: {
                        id: progress.id,
                    },
                });
                if (!updatedProgress) {
                    throw new Error("Progress entry not found!");
                }
                updatedProgress.value = progress.value;
                yield updatedProgress.save();
            }
            catch (error) {
                throw new Error("Failed to update progress entry!");
            }
        });
    }
    delete(progressId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const progress = yield Progress_1.Progress.findOne({
                    where: {
                        id: progressId,
                    },
                });
                if (!progress) {
                    throw new Error("Progress entry not found!");
                }
                yield progress.destroy();
            }
            catch (error) {
                throw new Error("Failed to delete progress entry!");
            }
        });
    }
    retrieveById(progressId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const progress = yield Progress_1.Progress.findOne({
                    where: {
                        id: progressId,
                    },
                });
                if (!progress) {
                    throw new Error("Progress entry not found!");
                }
                return progress;
            }
            catch (error) {
                throw new Error("Failed to retrieve progress entry by ID!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Progress_1.Progress.findAll();
            }
            catch (error) {
                throw new Error("Failed to retrieve all progress entries!");
            }
        });
    }
    findByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const progressEntries = yield Progress_1.Progress.findAll({
                    where: {
                        IDUtilisateur: userId,
                    },
                });
                return progressEntries;
            }
            catch (error) {
                throw new Error("Failed to fetch progress entries by user ID!");
            }
        });
    }
}
exports.ProgressRepo = ProgressRepo;

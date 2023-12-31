"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Progress_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("./User");
let Progress = Progress_1 = class Progress extends sequelize_typescript_1.Model {
};
Progress.PROGRESS_TABLE_NAME = "progress";
Progress.PROGRESS_ID = "id";
Progress.ID_UTILISATEUR = "IDUtilisateur";
Progress.VALUE = "value";
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: Progress_1.PROGRESS_ID,
    }),
    __metadata("design:type", Number)
], Progress.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: Progress_1.ID_UTILISATEUR,
    }),
    __metadata("design:type", Number)
], Progress.prototype, "IDUtilisateur", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        validate: {
            min: 0,
            max: 100,
        },
        field: Progress_1.VALUE,
    }),
    __metadata("design:type", Number)
], Progress.prototype, "value", void 0);
Progress = Progress_1 = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: Progress_1.PROGRESS_TABLE_NAME,
    })
], Progress);
exports.Progress = Progress;

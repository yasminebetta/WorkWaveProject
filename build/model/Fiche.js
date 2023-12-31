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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FicheApprentissage = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("./User");
let FicheApprentissage = class FicheApprentissage extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "IDFicheApprentissage",
    }),
    __metadata("design:type", Number)
], FicheApprentissage.prototype, "IDFicheApprentissage", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: "IDUtilisateur",
    }),
    __metadata("design:type", Number)
], FicheApprentissage.prototype, "IDUtilisateur", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User),
    __metadata("design:type", User_1.User)
], FicheApprentissage.prototype, "utilisateur", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        field: "Question",
    }),
    __metadata("design:type", String)
], FicheApprentissage.prototype, "Question", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        field: "Reponse",
    }),
    __metadata("design:type", String)
], FicheApprentissage.prototype, "Reponse", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        field: "Categorie",
    }),
    __metadata("design:type", String)
], FicheApprentissage.prototype, "Categorie", void 0);
FicheApprentissage = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "FicheApprentissage",
    })
], FicheApprentissage);
exports.FicheApprentissage = FicheApprentissage;

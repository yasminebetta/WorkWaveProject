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
var Category_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Category = Category_1 = class Category extends sequelize_typescript_1.Model {
};
Category.CATEGORY_TABLE_NAME = "category";
Category.CATEGORY_ID = "id";
Category.CATEGORY_NAME = "name";
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: Category_1.CATEGORY_ID,
    }),
    __metadata("design:type", Number)
], Category.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        field: Category_1.CATEGORY_NAME,
    }),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
Category = Category_1 = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: Category_1.CATEGORY_TABLE_NAME,
    })
], Category);
exports.Category = Category;

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
exports.delAnimal = exports.updateAnimal = exports.createAnimal = exports.getAnimal = exports.getAllAnimals = void 0;
const db_1 = require("../services/db");
function getAllAnimals(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, db_1.db_query)('SELECT * FROM animal');
            return res.status(200).json({ status: true, message: result });
        }
        catch (error) {
            let errorResponse;
            if (error instanceof Error) {
                errorResponse = error.message;
            }
            else {
                errorResponse = "Something Went Wrong";
            }
            return res.status(400).json({ status: false, message: errorResponse });
        }
    });
}
exports.getAllAnimals = getAllAnimals;
function getAnimal(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, db_1.db_query)('SELECT * FROM animal WHERE id = ?', [req.params.id]);
            return res.status(200).json({ status: true, message: result });
        }
        catch (error) {
            let errorResponse;
            if (error instanceof Error) {
                errorResponse = error.message;
            }
            else {
                errorResponse = "Something Went Wrong";
            }
            return res.status(400).json({ status: false, message: errorResponse });
        }
    });
}
exports.getAnimal = getAnimal;
function createAnimal(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = Object.assign({}, req.body);
            const result = yield (0, db_1.db_query)(`INSERT INTO animal SET ?`, data);
            return res.status(200).json({ status: true, message: result });
        }
        catch (error) {
            let errorResponse;
            if (error instanceof Error) {
                errorResponse = error.message;
            }
            else {
                errorResponse = "Something Went Wrong";
            }
            return res.status(400).json({ status: false, message: errorResponse });
        }
    });
}
exports.createAnimal = createAnimal;
function updateAnimal(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = Object.assign({}, req.body);
            const result = yield (0, db_1.db_query)(`UPDATE animal SET ? WHERE id = ${req.params.id}`, data);
            return res.status(200).json({ status: true, message: result });
        }
        catch (error) {
            let errorResponse;
            if (error instanceof Error) {
                errorResponse = error.message;
            }
            else {
                errorResponse = "Something Went Wrong";
            }
            return res.status(400).json({ status: false, message: errorResponse });
        }
    });
}
exports.updateAnimal = updateAnimal;
function delAnimal(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, db_1.db_query)('DELETE FROM animal WHERE id = ?', [req.params.id]);
            return res.status(200).json({ status: true, message: result });
        }
        catch (error) {
            let errorResponse;
            if (error instanceof Error) {
                errorResponse = error.message;
            }
            else {
                errorResponse = "Something Went Wrong";
            }
            return res.status(400).json({ status: false, message: errorResponse });
        }
    });
}
exports.delAnimal = delAnimal;
//# sourceMappingURL=animal.js.map
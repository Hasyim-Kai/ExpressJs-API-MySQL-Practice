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
exports.db_query = void 0;
const mysql = require('mysql2/promise');
const dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "express_api",
};
function db_query(sql, params = []) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield mysql.createConnection(dbConfig);
            const [data] = yield connection.query(sql, params);
            return data;
        }
        catch (error) {
            return error;
        }
        finally {
            connection.end();
        }
    });
}
exports.db_query = db_query;
//# sourceMappingURL=db.js.map
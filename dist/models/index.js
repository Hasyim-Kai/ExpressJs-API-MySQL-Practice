"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
exports.sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    // operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
// (async ()=>{
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })
const db = {};
db.Sequelize = Sequelize;
db.sequelize = exports.sequelize;
db.tutorials = require("./tutorial.model.js")(exports.sequelize, Sequelize);
module.exports = db;
//# sourceMappingURL=index.js.map
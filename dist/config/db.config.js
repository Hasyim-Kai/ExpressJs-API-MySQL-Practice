"use strict";
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "express_api",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
//# sourceMappingURL=db.config.js.map
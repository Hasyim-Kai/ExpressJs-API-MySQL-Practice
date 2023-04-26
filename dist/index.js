"use strict";
// ======================
//  App initialization 
// ======================
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const db = require("./models");
let port = process.env.PORT || 4000;
// const AppError = require("./utils/appError");
// const errorHandler = require("./utils/errorHandler");
// =====================
//  Use Middlewares
// =====================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, }));
app.use((err, req, res, next) => {
    console.log(err);
    if (err === 'App tidak lengkap') {
        res.status(400).json({
            status: 'Bad Request',
            msg: err
        });
    }
    else if (err === `Gagal membuat App baru`) {
        res.status(400).json({
            status: 'Not Found',
            msg: err.message
        });
    }
    else {
        res.status(500).json({
            status: err.name,
            msg: err.message
        });
    }
});
db.sequelize.sync({ force: true }).then(() => {
    console.log("DB Synced");
}).catch((err) => {
    console.log("Failed to sync db: " + err.message);
});
// =====================
//  Initialize Routes
// =====================
const routes = require('./routes/index');
const tutorialRoutes = require("./routes/turorial.routes");
// =====================
//  Use Routes
// =====================
app.use('/api', routes);
app.use('/api/tutorials', tutorialRoutes);
// =====================
//  Start Server
// =====================
app.listen(port, () => {
    console.log("Aplikasi kita Tersambung di localhost:" + port);
});
//# sourceMappingURL=index.js.map
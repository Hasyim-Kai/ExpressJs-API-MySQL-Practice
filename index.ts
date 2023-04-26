// ======================
//  App initialization 
// ======================

require('dotenv').config();
import { Request, Response, NextFunction } from 'express';
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

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true, }));
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  if (err === 'App tidak lengkap') {
    res.status(400).json({
      status: 'Bad Request',
      msg: err
    })
  } else if (err === `Gagal membuat App baru`) {
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
})

// =====================
//  Sequelize DB Sync 
// =====================

db.sequelize.sync().then(() => {
  console.log("DB Synced");
}).catch((err: any) => {
  console.log("Failed to sync db: " + err.message);
});

// =====================
//  Initialize & Use Routes
// =====================

const routes = require('./routes/index.routes.ts');
app.use('/api', routes)

// =====================
//  Start Server
// =====================

app.listen(port, () => {
  console.log("Aplikasi kita Tersambung di localhost:" + port);
});
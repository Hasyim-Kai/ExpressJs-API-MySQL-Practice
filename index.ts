// ======================
//  App initialization 
// ======================

const express = require('express');
const app = express();
const cors = require('cors');
// const AppError = require("./utils/appError");
// const errorHandler = require("./utils/errorHandler");
let port = process.env.PORT || 4000;

// =====================
//  Use Middlewares
// =====================

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true, }));
// app.use(errorHandler);
// app.all("*", (req, res, next) => {
//   next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
// });

// =====================
//  Initialize Routes
// =====================

const routes = require('./routes/index');

// =====================
//  Use Routes
// =====================

app.use('/api', routes)

// =====================
//  Start Server
// =====================

app.listen(port, () => {
  console.log("Aplikasi kita Tersambung di localhost:" + port);
});
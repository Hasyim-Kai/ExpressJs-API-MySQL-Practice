"use strict";
import { Request, Response, NextFunction } from 'express';
const Bcrypt = require("bcryptjs");
const Jwt = require("jsonwebtoken");
const Env = require("../../lib/env");
const Errors = require("../../lib/errors");
const Database = require("../../lib/database");
const Generator = require("../../lib/generator");
const Definitions = require("../../lib/definitions");

const DB = Database.Connect();

// Create a new user on the database with a new auth token.
exports.Create = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, } = req.body;

  try {
    const foundUser = await DB.USER.findOne({ where: { email } });

    if (foundUser) {
      return res.status(200).json({
        success: false,
        error: "Email already exists",
      });
    }

    const authToken = Jwt.sign({ email: email }, Env.KEY.JWT);
    const emailVerificationToken = await Generator.GenerateToken(20);
    const passwordHash = Bcrypt.hashSync(password, Bcrypt.genSaltSync(10));

    const user = await DB.USER.create({
      email: email,
      password: passwordHash,
      authToken: authToken,
      emailVerificationToken: emailVerificationToken,
    });

    res.status(201).json({
      success: true,
      user: user.purge(),
    });

  } catch (err) {
    Errors.Handle(err);
    res.status(500).json({
      success: false,
      error: "Something went wrong",
    });
  }
};
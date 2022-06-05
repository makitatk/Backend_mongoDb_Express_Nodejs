import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { body } from "express-validator";
import { validationResultExppress } from "../middlewares/ValidationResultsExpress.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("email", "Formato de email incorrecto")
      .trim()
      .isEmail()
      .normalizeEmail(),
    body("password", "Formato de password es incorrecta")
      .trim()
      .isLength({ min: 8 }),
  ],
  validationResultExppress,
  register
);

router.post(
  "/login",
  [
    body("email", "Formato de email incorrecto")
      .trim()
      .isEmail()
      .normalizeEmail(),
    body("password", "Formato de password es incorrecta")
      .trim()
      .isLength({ min: 8 }),
  ],
  validationResultExppress,
  login
);

export default router;

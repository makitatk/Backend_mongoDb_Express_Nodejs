import { Router } from "express";
import {
  infoUser,
  login,
  refreshToken,
  register,
} from "../controllers/auth.controller.js";
import { body } from "express-validator";
import { validationResultExppress } from "../middlewares/ValidationResultsExpress.js";
import { requireToken } from "../middlewares/RequireToken.js";

const router = Router();

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

router.get("/protected", requireToken, infoUser);
router.get("/refresh", refreshToken);
export default router;

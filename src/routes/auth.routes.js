import { Router } from "express";
import {
  login,
  resetPassword,
  sendEmail,
  signup,
} from "../controllers/auth.controller.js";
import userValidator from "../validators/user.validator.js";
import loginValidator from "../validators/login.validator.js";

const authRouter = Router();

authRouter.post("/login", loginValidator, login);
authRouter.post("/signup", signup);
authRouter.post("/email", sendEmail);
authRouter.post("/reset", resetPassword);

export default authRouter;

import { Router } from "express";
import { login, signup } from "../controllers/auth.controller.js";
import userValidator from "../validators/user.validator.js";
import loginValidator from "../validators/login.validator.js";

const authRouter = Router();

authRouter.post("/login", loginValidator, login);
authRouter.post("/signup", signup);

export default authRouter;

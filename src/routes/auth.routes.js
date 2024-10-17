import { Router } from "express";
import { login, signup } from "../controllers/auth.controller.js";
import userValidator from '../validators/user.validator.js';

const authRouter = Router();

authRouter.post("/login", login);
authRouter.post("/signup", userValidator, signup);

export default authRouter;

import { Router } from "express";

import {
  updateUser,
  getUserById,
  getUserByToken,
} from "../controllers/user.controller.js";
const userRouter = Router();

userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.get("/", getUserByToken);

export default userRouter;

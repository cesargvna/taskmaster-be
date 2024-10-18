import { Router } from "express";

import { updateUser, getUserById } from "../controllers/user.controller.js";
const userRouter = Router();

userRouter.get("/:id", getUserById)
userRouter.put("/:id", updateUser)


export default userRouter;

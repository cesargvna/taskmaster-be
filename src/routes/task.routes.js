import { Router } from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

const userRouter = Router();

userRouter.post("/", createTask);
userRouter.get("/", getTasks);
userRouter.get("/:id", getTaskById);
userRouter.put("/:id", updateTask);
userRouter.delete("/:id", deleteTask);

export default userRouter;

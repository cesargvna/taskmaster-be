import { Router } from "express";
import { orderTasks } from "../controllers/search.controller.js";

const searchRouter = Router();

searchRouter.get("/sort", orderTasks);

export default searchRouter;

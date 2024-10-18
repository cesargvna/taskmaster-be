import "dotenv/config";

import http from "http";
import express from "express";
import morgan from "morgan";
import cors from 'cors'

import "./database/connection.js";

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import { tokenExtractor, authMiddleware } from "./middleware/auth.middlewre.js";
import { errorHandler } from "./middleware/errorHandler.js";

function main() {
  const port = process.env.PORT ?? 3000;
  const app = express();

  app.use(morgan("dev"));
  app.use(express.json());
  app.use(cors());
  app.use(tokenExtractor);

  app.use("/auth", authRouter);
  app.use("/user", authMiddleware, userRouter);

  app.use(errorHandler);

  const httpServer = http.createServer(app);
  httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
main();

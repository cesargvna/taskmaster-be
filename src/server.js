import "dotenv/config";

import http from "http";
import express from "express";
import morgan from "morgan";

import "./database/connection.js";
import { User } from "./database/models/user.model.js";

import authRouter from "./routes//auth.routes.js";

function main() {
  const port = process.env.PORT ?? 3000;
  const app = express();
  app.use(morgan("dev"));
  app.use(express.json());

  app.use("/auth", authRouter);

  const httpServer = http.createServer(app);
  httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
main();

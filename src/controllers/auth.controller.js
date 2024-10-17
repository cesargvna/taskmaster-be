import { v4 } from "uuid";
import {
  hashPassword,
  jwtEncode,
  verifyPassword,
} from "../services/auth.service.js";
import { User } from "../database/models/index.js";

export async function login(req, res) {
  res.send("Login route");
}
export async function signup(req, res) {
  const { email, password, name, phone } = req.body;

  const passwordHash = await hashPassword(password);
  const created = await User.create({
    id: v4(),
    email,
    password: passwordHash,
    name,
    phone,
  });
  if (!created) {
    return res.status(500).send({
      success: false,
      message: "Failed to create user",
    });
  }
  return res.status(201).send({
    success: true,
    message: "User created",
  });
}

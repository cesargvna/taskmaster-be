import { v4 } from "uuid";
import {
  hashPassword,
  jwtEncode,
  verifyPassword,
} from "../services/auth.service.js";
import { User } from "../database/models/index.js";

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "User not found",
    });
  }

  const passwordVerified = await verifyPassword(password, user.password);
  if (!passwordVerified) {
    return res.status(401).json({
      success: false,
      message: "Invalid password",
    });
  }

  const now = new Date();
  const TWO_HURS_IN_MS = 60 * 60 * 2;
  const expiresIn = Math.floor(now.getTime() / 1000) + TWO_HURS_IN_MS;
  const issuedAt = Math.floor(now.getTime() / 1000);

  // const payload = {
  //   sub: user.id,
  //   exp: expiresIn,
  //   iat: issuedAt,
  //   iss: process.env.JWT_ISSUER,
  // }
  const payload = {
    id: user.id,
    email: user.email,
  };

  const token = await jwtEncode(payload);

  return res.status(200).json({
    success: true,
    data: {
      token,
      expiresIn,
    },
  });
}
export async function signup(req, res, next) {
  const { email, password, name, phone } = req.body;
  try {
    const passwordHash = await hashPassword(password);
    const created = await User.create({
      id: v4(),
      email: email,
      password: passwordHash,
      name: name,
      phone: phone,
    });
    console.log(created);
    // if (!created) {
    //   return res.status(500).send({
    //     success: false,
    //     message: "Failed to create user",
    //   });
    // }
    return res.status(201).send({
      success: true,
      message: "User created",
      data: created,
    });
  } catch (error) {
    next(error);
  }
}

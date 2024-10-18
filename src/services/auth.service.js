import { hash, genSalt, compare } from "bcrypt";
import jwt from "jsonwebtoken";

export async function hashPassword(plain) {
  const salt = await genSalt(10);
  const encrypt = await hash(plain, salt);
  return encrypt;
}

export async function verifyPassword(plain, hash) {
  const verified = await compare(plain, hash);
  return verified;
}

export async function jwtEncode(payload) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("Secret not found");
  }
  const token = jwt.sign(payload, secret, { expiresIn: '1d' });
  return token;
}

export function jwtDecode(token) { }

export function jwtVerify(encoded) {
  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("Secret not found");
    }
    const decoded = jwt.verify(encoded, secret);
    return decoded;
  } catch (error) {
    return null;
  }
}

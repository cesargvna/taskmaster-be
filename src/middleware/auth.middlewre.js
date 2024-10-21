import { jwtVerify } from "../services/auth.service.js";
import jwt from "jsonwebtoken";
import { User } from "../database/models/index.js";

const tokenExtractor = (req, res, next) => {
  const auth = req.get("authorization");
  if (auth && auth.startsWith("Bearer ")) {
    req.token = auth.replace("Bearer ", "");
  }
  next();
};

const authMiddleware = async (req, res, next) => {
  try {
    //const decodedToken = jwtVerify(req.token);
    const decodedToken = jwt.verify(req.token, process.env.JWT_SECRET);
    if (!decodedToken.id) {
      return res.status(401).json({ error: "Token invalid" });
    }
    req.user = await User.findOne({
      where: {
        id: decodedToken.id,
      },
    });
    next();
  } catch (error) {
    console.log("antes del invalid", error);
    next(error);
  }
};

export { tokenExtractor, authMiddleware };

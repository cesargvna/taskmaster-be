import { User } from "../database/models/index.js";
import { hashPassword, jwtVerify } from "../services/auth.service.js";
import path from "path";
import { fileURLToPath } from "url";
import { hash } from "bcrypt";
import { body } from "express-validator";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getUserByToken = async (req, res, next) => {
  const { token } = req;
  const decodedToken = jwtVerify(token);
  try {
    const user = await User.findOne({
      where: {
        id: decodedToken.id,
      },
    });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { password, ...body } = req.body;
  console.log(req.body);

  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    let uploadPath;
    let imageFile = null;
    if (req.files && req.files.image) {
      imageFile = req.files.image;
      console.log(imageFile);
      uploadPath = path.join(
        __dirname,
        "./uploads", //poner un puntp
        `${id}.${imageFile.mimetype.split("/")[1]}`,
      );
      imageFile.mv(uploadPath, (err) => {
        if (err) {
          return res.status(500).send(err);
        }
      });
    }

    const newPassw = password ? await hashPassword(password) : undefined;
    const updatedUser = {
      ...body,
      password: newPassw,
      image: uploadPath
        ? `/uploads/${id}.${imageFile.mimetype.split("/")[1]}`
        : user.image,
    };

    await user.update(updatedUser);

    res.status(200).json({
      success: true,
      message: "User updated",
    });
  } catch (error) {
    next(error);
  }
};
export { getUserById, updateUser, getUserByToken };

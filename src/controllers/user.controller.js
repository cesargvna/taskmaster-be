import { User } from "../database/models/index.js";
import { hashPassword } from "../services/auth.service.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  const { password } = req.body;
  console.log(req.files);
  const user = await User.findOne({
    where: {
      id,
    },
  });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  let uploadPath;
  let imageFile = null;
  if (req.files && req.files.image) {
    imageFile = req.files.image;
    console.log(imageFile);
    uploadPath = path.join(
      __dirname,
      "../uploads",
      `${id + "." + imageFile.mimetype.split("/")[1]}`,
    );
    imageFile.mv(uploadPath, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
    });
  }
  const updatedUser = {
    ...user,
    password: password && (await hashPassword(password)),
    image:
      uploadPath && `/uploads/${id + "." + imageFile.mimetype.split("/")[1]}`,
    ...req.body,
  };

  try {
    const userUpdated = await user.update(updatedUser, {
      where: {
        id,
      },
    });
    if (!userUpdated) {
      return res.status(400).json({
        success: false,
        message: "User not update",
      });
    }
    res.status(200).json({
      success: true,
      message: "User updated",
    });
  } catch (error) {
    next(error);
  }
};
export { getUserById, updateUser };

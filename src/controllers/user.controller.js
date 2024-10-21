import { User } from "../database/models/index.js";
import { hashPassword } from "../services/auth.service.js";

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
  const { email, password, name, phone } = req.body;
  const user = await User.findOne({
    where: {
      id,
    },
  });
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  const passwordHash = await hashPassword(password);
  try {
    const userUpdated = await user.update({
      email,
      password: passwordHash,
      name,
      phone,
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

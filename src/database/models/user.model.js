import { DataTypes } from "sequelize";
import { connection } from "../connection.js";

const User = connection.define(
  "users",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING(15),
      unique: true,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  },
);

//User.sync({ force: true });

export { User };

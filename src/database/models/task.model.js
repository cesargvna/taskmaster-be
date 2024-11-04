import { DataTypes } from "sequelize";
import { connection } from "../connection.js";

const Task = connection.define(
  "tasks",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("do", "in-progress", "completed"),
      defaultValue: "do",
    },
  },
  {
    timestamps: true,
  },
);

export { Task };

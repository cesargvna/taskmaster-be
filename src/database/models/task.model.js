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
      type: DataTypes.ENUM("pending", "in_progress", "completed"),
      defaultValue: "pending",
    },
    priority: {
      type: DataTypes.ENUM("low", "medium", "high"),
      defaultValue: "low",
    },
    fechaVencimiento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    category: {
      type: DataTypes.ENUM("work", "personal", "student", "other"),
      defaultValue: "personal",
    },
  },
  {
    timestamps: true,
  },
);

export { Task };

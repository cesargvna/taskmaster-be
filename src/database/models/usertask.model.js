import { DataTypes } from "sequelize";
import { connection } from "../connection.js";
const UserTask = connection.define("UserTask", {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: "User",
      key: "id",
    },
  },
  taskId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Task",
      key: "id",
    },
  },
});

export { UserTask };

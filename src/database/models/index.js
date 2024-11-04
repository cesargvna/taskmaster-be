import { User } from "./user.model.js";
import { Task } from "./task.model.js";

User.belongsToMany(Task, {
  through: {
    model: "User_Task",
    unique: false,
  },
});

Task.belongsToMany(User, {
  through: {
    model: "User_Task",
    unique: false,
  },
});

User.sync({
  //force: true,
});

Task.sync({
  //force: true,
});

export { User, Task };

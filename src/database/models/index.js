import { User } from "./user.model.js";
import { Task } from "./task.model.js";
import { UserTask } from "./usertask.model.js";

User.belongsToMany(Task, {
  through: {
    model: UserTask,
    unique: false,
  },
});

Task.belongsToMany(User, {
  through: {
    model: UserTask,
    unique: false,
  },
});

User.sync({
  //force: true,
});

Task.sync({
  //force: true,
});

UserTask.sync({
  //force: true,
});

export { User, Task, UserTask };

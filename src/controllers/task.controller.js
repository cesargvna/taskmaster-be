import { v4 } from "uuid";
import { Task } from "../database/models/index.js";

const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
};

const getTaskById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({
      where: {
        id,
      },
    });
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }
    res.status(200).json({
      success: true,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  const { name, description, status } = req.body;
  try {
    const task = await Task.create({
      id: v4(),
      name,
      description,
      status,
    });
    res.status(201).json({
      success: true,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  const { id } = req.params;
  const { name, description, status } = req.body;
  try {
    const task = await Task.findOne({
      where: {
        id,
      },
    });
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }
    const updatedTask = await task.update({
      name,
      description,
      status,
    });
    res.status(200).json({
      success: true,
      data: updatedTask,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({
      where: {
        id,
      },
    });
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }
    await task.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
export { createTask, deleteTask, getTaskById, getTasks, updateTask };

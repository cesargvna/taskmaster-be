import { Task } from "../database/models/index.js";
import Sequelize from "sequelize";
import { Op } from "sequelize";

export async function orderTasks(req, res) {
  const { category, fechaVencimiento, priority } = req.query;
  console.log(category, fechaVencimiento, priority);
  const whereConditions = {};

  if (category) {
    whereConditions.category = category;
  }
  if (fechaVencimiento) {
    whereConditions.fechaVencimiento = fechaVencimiento;
  }
  if (priority) {
    whereConditions.priority = priority;
  }

  try {
    const tasks = await Task.findAll({
      where: whereConditions,
      order: [
        [
          Sequelize.literal(`CASE 
            WHEN priority = 'low' THEN 1
            WHEN priority = 'medium' THEN 2
            WHEN priority = 'high' THEN 3
            END`),
          "ASC",
        ],
        ["fechaVencimiento", "ASC"],
      ],
    });
    if (tasks.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No se encontraron tareas" });
    }
    return res.status(200).json({ sussess: true, data: tasks });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function searchTasksByName(req, res) {
  const { name } = req.query;
  try {
    const tasks = await Task.findAll({
      where: {
        name: {
          [Sequelize.Op.like]: `%${name}%`,
        },
      },
    });
    if (tasks.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No se encontraron tareas" });
    }
    return res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

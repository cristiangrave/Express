const taskModel = require("../models/taskModel");

const addTask = (id, task, description, deadline) => {
  if (!id || !task || !description || !deadline) {
    throw new Error("Parámetros incorrectos");
  }
  taskModel.addTask(id, task, description, deadline);
};

const removeTask = (task) => {
  if (!task) {
    throw new Error("Parámetros incorrectos");
  }
  taskModel.removeTask(task);
};

const getTasks = () => {
  return taskModel.getTasks();
};

module.exports = {
  addTask,
  removeTask,
  getTasks,
};

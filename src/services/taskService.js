const taskModel = require('../models/taskModel');

const addTask = (task, deadline) => {
    if (!task || !deadline) {
        throw new Error('Parámetros incorrectos');
    }
    taskModel.addTask(task, deadline);
};

const removeTask = (task) => {
    if (!task) {
        throw new Error('Parámetros incorrectos');
    }
    taskModel.removeTask(task);
};

const getTasks = () => {
    return taskModel.getTasks();
};

module.exports = {
    addTask,
    removeTask,
    getTasks
};
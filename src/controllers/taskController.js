const taskService = require('../services/taskService');

const getTasks = (req, res) => {
    res.status(200).json(taskService.getTasks());
};

const addTask = (req, res) => {
    try {
        const { task, deadline } = req.body;
        taskService.addTask(task, deadline);
        res.status(200).json({ message: 'Tarea agregada' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const removeTask = (req, res) => {
    try {
        const { task } = req.body;
        taskService.removeTask(task);
        res.status(200).json({ message: 'Tarea eliminada' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getTasks,
    addTask,
    removeTask
};
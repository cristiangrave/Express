let tasks = [];

const addTask = (task, deadline) => {
    tasks.push({ task, deadline });
};

const removeTask = (task) => {
    tasks = tasks.filter(t => t.task !== task);
};

const getTasks = () => tasks;

module.exports = {
    addTask,
    removeTask,
    getTasks
};

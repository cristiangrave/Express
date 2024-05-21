const mongoose = require('mongoose');

let goals = [];

 
const addGoal = (id,goal, deadline) => {
    goals.push({id, goal, deadline });
};

const removeGoal = (id) => {
    goals = goals.filter(g => g.id !== id);
};

const getGoals = () => goals;

module.exports = {
    addGoal,
    removeGoal,
    getGoals
};
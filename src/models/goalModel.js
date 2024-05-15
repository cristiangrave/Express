let goals = [];

const addGoal = (goal, deadline) => {
    goals.push({ goal, deadline });
};

const removeGoal = (goal) => {
    goals = goals.filter(g => g.goal !== goal);
};

const getGoals = () => goals;

module.exports = {
    addGoal,
    removeGoal,
    getGoals
};
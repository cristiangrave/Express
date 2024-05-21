const goalModel = require('../models/goalModel');

const addGoal = (id,goal, deadline) => {
    if (!id||!goal || !deadline) {
        throw new Error('Parámetros incorrectos');
    }
    goalModel.addGoal(id,goal, deadline);
};

const removeGoal = (id) => {
    if (!id) {
        throw new Error('Parametros incorrectos');
    }
    goalModel.removeGoal(id);
};

const getGoals = () => {
    return goalModel.getGoals();
};

module.exports = {
    addGoal,
    removeGoal,
    getGoals
};
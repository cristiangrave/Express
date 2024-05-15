const goalService = require('../services/goalService');

const getGoals = (req, res) => {
    res.status(200).json(goalService.getGoals());
};

const addGoal = (req, res) => {
    try {
        const { goal, deadline } = req.body;
        goalService.addGoal(goal, deadline);
        res.status(200).json({ message: 'Meta agregada' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const removeGoal = (req, res) => {
    try {
        const { goal } = req.body;
        goalService.removeGoal(goal);
        res.status(200).json({ message: 'Meta eliminada' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getGoals,
    addGoal,
    removeGoal
};

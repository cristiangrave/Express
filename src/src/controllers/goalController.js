const goalService = require('../services/goalService');

const getGoals = (req, res) => {
    res.status(200).json(goalService.getGoals());
};

const addGoal = (req, res) => {
  let idgoal = Date.now() + Math.random();
  idgoal = Math.floor(idgoal);
    try {
      const { goal, deadline } = req.body;
      /* aqui solo mandamos las variables del request el id goal se asigna cuando se llama el metodo addgoal */
        goalService.addGoal(idgoal,goal,deadline);
        res.status(200).json({ message:'Meta agregada'});
    } catch (error) {
        res.status(400).json({error:error.message });
    }
};

const removeGoal = (req, res) => {
    try {
        const { id } = req.body;
        goalService.removeGoal(id);
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

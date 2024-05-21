const express = require("express");
const { celebrate, Joi, errors } = require("celebrate");
const goalController = require("../controllers/goalController");
const router = express.Router();
const mongoose = require("mongoose");
const goalInit = mongoose.model(
  "goals",
  { goal: String, description: String, deadline: String },
  "goals"
);
router.get("/getGoals", function (req, res, next) {
  goalInit
    .find({})
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err));
});

router.post(
  "/addGoal",
  celebrate({
    body: Joi.object().keys({
      goal: Joi.string().required(),
      deadline: Joi.string().required(),
    }),
  }),
  function (req, res, next) {
    /* guardando una meta */
    const goal = new goalInit(req.body);
    goal
      .save()
      .then((response) => res.status(200).json(200))
      .catch(() => res.status(500).json({ message: "No se pudo Guardar" }));
  }
);

router.delete(
  "/removeGoal",
  celebrate({
    body: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  function (req, res, next) {
    const { id } = req.body;
    goalInit
      .deleteOne({ _id: new mongoose.Types.ObjectId(id) })
      .then((response) => {
        res.status(200).json(200);
      })
      .catch((erro) => {
        res.status(500).json(erro);
      });
  }
);
router.use(errors());
module.exports = router;

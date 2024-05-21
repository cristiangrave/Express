const express = require("express");
/**celebrate nos ayuda a validad las peticiones */
const { celebrate, Joi, errors } = require("celebrate");
const taskController = require("../controllers/taskController");
const router = express.Router();
const mongoose = require('mongoose');
const taskInit = mongoose.model('tasks', {task:String,description:String,deadline:String},'tasks');

router.get("/getTasks",function (req,res,next) {
  /* taskController.getTasks */
  taskInit.find({}).then((response)=>res.status(200).json(response)).catch((err) =>res.status(500).json(err));
   });
router.post(
  "/addTask",
  celebrate({
    body: Joi.object().keys({
      task: Joi.string().required(),
      description: Joi.string().required(),
      deadline: Joi.string().required(),
    }),
  }), function (req, res, next) {
    /* guardando una tarea */
    const task = new taskInit(req.body);
    task.save().then((response) =>
      res.status(200).json(200)
    ).catch(() =>
      res.status(500).json({ message: "No se pudo Guardar" })
    );
  });

router.delete(
  "/removeTask",
  celebrate({
    body: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  function (req,res,next) { 
    const { id } = req.body;
    taskInit.deleteOne({ _id: new mongoose.Types.ObjectId(id)})
      .then((response) => { res.status(200).json(200) })
      .catch((erro) => {res.status(500).json(erro)});
  }
);

router.use(errors());

module.exports = router;

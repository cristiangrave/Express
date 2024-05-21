const taskService = require("../services/taskService");
/* const mongoose = require('mongoose');
 *//* estas es una instancia el primer parametro es el nombre de la colleccion y */
/* const taskInit = mongoose.model('tasks', {task:String,description:String,deadline:String},'tasks');
 */

const getTasks = (req, res,next) => {
  taskInit.find({}).then((response)=>response.status(200).json(response)).catch((res) =>res.status(500).json(res));
};
const addTask = (req, res) => {
  let idtask = Date.now() + Math.random();
  idtask = Math.floor(idtask);
  try {  
    /**guardando una tarea */
  const task = new taskInit(req.body);
    task.save().then((res)=> 
      res.status(200).json(200)
    ).catch(() =>
    res.status(500).json({ message: "No se pudo Guardar" })
    );
    /*mandamos los recursos al servises donde se validan  */
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeTask = (req, res) => {
  try {
    /*desde aqui mandamos el parametro para eliminar al modelo   */
    const { id } = req.body;
    let idtask = id;
    taskInit.deleteOne({_id:new mongoose.Types.ObjectId(idtask)})
      .then((res) => { res.status(200).json(res) })
      .catch((res) => { res.status(500).json({ message: "No se pudo Eliminar" }) });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  getTasks,
  addTask,
  removeTask,
};

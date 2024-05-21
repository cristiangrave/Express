let tasks = [];
const mongoose = require('mongoose');
/**inicialziacion de la tabla  */
const taskInit = mongoose.model('task', {name:String,description:String,deadline:String},'tasks');

const addTask = (id, task, description, deadline) => {
  let datos = [];
 /*  const task = new taskInit({ task, description, deadline });
  task.save(); */
  /*tasks.push({ id, task, description, deadline });*/};                                                                                                                                                          
const removeTask = (id) => {
  tasks = tasks.filter((t) => t.id !== id);
  console.log("recivo esto " + id);
  console.log(tasks);
};
const getTasks = () => tasks;
module.exports = {
  addTask,
  removeTask,
  getTasks,
};

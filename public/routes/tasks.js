var express = require("express");
var router = express.Router();

let tasks = [];
router.get("/getTasks", function (req, res, next) {
  res.json(tasks);
});
router.post("/addTasks", function (req, res, next) {
  let timeStamp = Date.now() + Math.random();
  if (req.body && req.body.title && req.body.descrition && req.body.dueDate) {
    req.body.id = timeStamp.toString();
    tasks.push(req.body);
  }
  res.json(tasks);
});
router.delete("/deleteTasks/:id", function (req, res, next) {
  let timeStamp = Date.now() + Math.random();
  if (req.params && req.params.id) {
    let id = req.params.id;
    tasks = tasks.filter((tasks) => tasks.id !== id);
    res.json(tasks);
  } else {
    /*en dato caso no tiene tiene respuesta no va hacer nada  */
    res.json([{}]);
  }
  res.json(tasks);
});

module.exports = router;

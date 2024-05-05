var express = require("express");
var router = express.Router();
let goals = [];
router.get("/getGoals", function (req, res, next) {
  res.json(goals);
});
router.post("/addGoals", function (req, res, next) {
  let timeStamp = Date.now() + Math.random();
  if (req.body && req.body.title && req.body.descrition && req.body.dueDate) {
    req.body.id = timeStamp.toString();
    goals.push(req.body);
  }
  res.json(goals);
});
router.delete("/deleteGoals/:id", function (req, res, next) {
  let timeStamp = Date.now() + Math.random();
  if (req.params && req.params.id) {
    let id = req.params.id;
    goals = goals.filter((goals) => goals.id !== id);
    res.json(goals);
  } else {
    /*en dato caso no tiene tiene respuesta no va hacer nada  */
    res.json([{}]);
  }
  res.json(gosals);
});
module.exports = router;

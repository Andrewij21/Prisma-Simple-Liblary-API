const route = require("express").Router();
const {
  studentController: { register, students, removeStudent },
} = require("../controller");
const {
  studentRules: { createRules },
  validate,
} = require("../middleware/validator");

route.get("/", students);
route.post("/", createRules, validate, register);
route.delete("/:id", removeStudent);

module.exports = route;

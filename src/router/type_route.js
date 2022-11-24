const route = require("express").Router();
const {
  typeController: { addType, types },
} = require("../controller");
const {
  typeRules: { createRules },
  validate,
} = require("../middleware/validator");

route.get("/", types);
route.post("/", createRules, validate, addType);

module.exports = route;

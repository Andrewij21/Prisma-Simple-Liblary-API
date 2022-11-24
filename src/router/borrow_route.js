const route = require("express").Router();
const {
  borrowController: { addBorrow, borrows, deleteBorrow },
} = require("../controller");
const {
  borrowRules: { createRules },
  validate,
} = require("../middleware/validator");

route.get("/", borrows);
route.post("/", createRules, validate, addBorrow);
route.delete("/:id", deleteBorrow);

module.exports = route;

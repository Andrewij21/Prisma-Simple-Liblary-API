const route = require("express").Router();
const {
  bookController: { books, addBook },
} = require("../controller");
const {
  bookRules: { createRules },
  validate,
} = require("../middleware/validator");

route.get("/", books);
route.post("/", createRules, validate, addBook);

module.exports = route;

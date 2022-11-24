const route = require("express").Router();
const {
  authorController: { authors, addAuthor, deleteAuthor },
} = require("../controller");
const {
  authorRules: { createRules },
  validate,
} = require("../middleware/validator");

route.get("/", authors);
route.post("/", createRules, validate, addAuthor);
route.delete("/:id", deleteAuthor);

module.exports = route;

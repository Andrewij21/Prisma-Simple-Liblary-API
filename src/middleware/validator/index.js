const { validationResult } = require("express-validator");
const bookRules = require("./rules/bookRules");
const authorRules = require("./rules/authorRules");
const typeRules = require("./rules/typeRules");
const studentRules = require("./rules/studentRules");
const borrowRules = require("./rules/borrowRules");
const { reqres } = require("../../utils");

function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ ...reqres.incomplete_body, error: errors.array() });
  }
  next();
}
module.exports = {
  bookRules,
  authorRules,
  typeRules,
  studentRules,
  borrowRules,
  validate,
};

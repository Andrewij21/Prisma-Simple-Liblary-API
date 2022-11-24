const route = require("express").Router();
const studentRoute = require("./student_route");
const typeRoute = require("./type_route");
const bookRoute = require("./book_route");
const authorRoute = require("./author_route");
const borrowRoute = require("./borrow_route");
const url = "/api/v1";

route.use(url + "/student", studentRoute);
route.use(url + "/type", typeRoute);
route.use(url + "/book", bookRoute);
route.use(url + "/author", authorRoute);
route.use(url + "/author", authorRoute);
route.use(url + "/borrow", borrowRoute);

module.exports = route;

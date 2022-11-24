const express = require("express");
const morgan = require("morgan");
const route = require("./router");

const app = express();
const PORT = 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(route);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

const express = require("express");

const helmet = require("helmet");

const routes = require("./routes");

const app = express();

app.use(routes);

app.use(helmet());

module.exports = app;

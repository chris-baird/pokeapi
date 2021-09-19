const express = require("express");

require("./db");

const expressWinston = require("express-winston");

const winston = require("winston");

const helmet = require("helmet");

const routes = require("./routes");

const app = express();

app.use(helmet());

app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  )
}));

app.use(routes);

app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  )
}));

module.exports = app;

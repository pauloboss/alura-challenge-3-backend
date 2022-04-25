// pacotes
const express = require("express");
const expressHandlebars = require("express-handlebars");
const routes = require('./routes');
require('dotenv').config();

// inicialização
const app = express();

//configs
app.engine(
  ".hbs",
  expressHandlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.set("views", "./views");

routes(app);

module.exports = app;

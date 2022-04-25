const transacaoRoutes = require('./transacaoRoute') 

module.exports = (app) => {

  app.use(transacaoRoutes);

  app.get("/", (_req, res) => {
    res.render("home");
  });
};

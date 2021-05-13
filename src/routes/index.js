const newsRouter = require("./news");
const siteRouter = require("./site");

function routes(app) {
  app.use("/news", newsRouter);
  app.use("/", siteRouter);

  // app.post("/search", (req, res) => {
  //   console.log(req.body);
  //   res.send("");
  // });
}

module.exports = routes;

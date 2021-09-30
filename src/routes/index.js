const newsRouter = require("./news");
const courseRouter = require("./courses");
const siteRouter = require("./site");

function routes(app) {
  app.use("/news", newsRouter);
  app.use("/courses", courseRouter);
  app.use("/", siteRouter);

  // app.post("/search", (req, res) => {
  //   console.log(req.body);
  //   res.send("");
  // });
}

module.exports = routes;

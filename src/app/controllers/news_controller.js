class NewsController {
  index(_, res) {
    res.render("news");
  }

  show(req, res) {
    res.send(req.params);
  }
}

module.exports = new NewsController();

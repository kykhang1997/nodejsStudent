class SiteController {
  index(_, res) {
    res.render("home");
  }

  search(_, res) {
    res.render("search");
  }
}

module.exports = new SiteController();

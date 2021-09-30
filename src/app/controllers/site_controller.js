const Course = require("../models/course_models");
const { arrayToObject } = require("../../utils/mongoose");
class SiteController {
  index(_, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: arrayToObject(courses) });
      })
      .catch(next);
    //
  }

  search(_, res) {
    res.render("search");
  }
}

module.exports = new SiteController();

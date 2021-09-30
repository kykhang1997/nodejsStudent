const Course = require("../models/course_models");
const { objToObject } = require("../../utils/mongoose");

class CoursesController {
  // GET /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((courses) => {
        res.render("courses/show", { courses: objToObject(courses) });
      })
      .catch(next);
  }
  // Get /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // post /courses/store
  store(req, res, next) {
    const course = Course(req.body);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }
}

module.exports = new CoursesController();

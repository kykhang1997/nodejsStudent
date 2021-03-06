const express = require("express");
const coursesController = require("../app/controllers/courses_controller");

const router = express.Router();

router.get("/create", coursesController.create);
router.post("/store", coursesController.store);
router.get("/:slug", coursesController.show);

module.exports = router;

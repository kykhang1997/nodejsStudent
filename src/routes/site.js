const express = require("express");
const siteController = require("../app/controllers/site_controller");

const router = express.Router();

router.use("/search", siteController.search);
router.use("/", siteController.index);

module.exports = router;

const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.controller");
const { authenticate } = require("../middleware/auth.middleware");

router.get("/", authenticate, dashboardController.getDashboard);
router.get("/momentum", authenticate, dashboardController.getMomentum);

module.exports = router;

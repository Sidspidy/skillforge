const express = require("express");
const router = express.Router();
const plannerController = require("../controllers/planner.controller");
const { authenticate } = require("../middleware/auth.middleware");

// Weekly Plan
router.get("/current", authenticate, plannerController.getOrCreateWeekPlan);

// Goals
router.post("/goal", authenticate, plannerController.addGoal);
router.put("/goal/:id", authenticate, plannerController.updateGoal);
router.delete("/goal/:id", authenticate, plannerController.deleteGoal);

// Reflection
router.post("/reflection", authenticate, plannerController.submitReflection);

module.exports = router;

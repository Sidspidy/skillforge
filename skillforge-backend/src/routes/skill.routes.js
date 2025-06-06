const express = require("express");
const router = express.Router();
const skillController = require("../controllers/skill.controller");
const { authenticate } = require("../middleware/auth.middleware");

router.post("/", authenticate, skillController.addSkill);
router.get("/", authenticate, skillController.getMySkills);
router.put("/:id", authenticate, skillController.updateSkill);
router.delete("/:id", authenticate, skillController.deleteSkill);
module.exports = router;

const express = require("express");
const router = express.Router();
const controller = require("../controllers/category.controller");
const { authenticate } = require("../middleware/auth.middleware");

router.post("/", authenticate, controller.createCategory);
router.get("/", authenticate, controller.getCategories);
router.put("/:id", authenticate, controller.updateCategory);
router.delete("/:id", authenticate, controller.deleteCategory);

module.exports = router;

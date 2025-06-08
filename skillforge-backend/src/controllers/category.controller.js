const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

// Create Category (user-scoped)
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const userId = req.user.id;

    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: "Name is required" });
    }

    const exists = await prisma.skillCategory.findFirst({
      where: { name, userId },
    });

    if (exists) {
      return res
        .status(409)
        .json({ success: false, message: "Category already exists" });
    }

    const category = await prisma.skillCategory.create({
      data: { name, userId },
    });

    res.status(201).json({ success: true, data: category });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get all categories (user-scoped)
exports.getCategories = async (req, res) => {
  try {
    const userId = req.user.id;
    const categories = await prisma.skillCategory.findMany({
      where: { userId },
      orderBy: { name: "asc" },
    });

    res.json({ success: true, count: categories.length, data: categories });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Update Category (user-scoped)
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const userId = req.user.id;

    const updated = await prisma.skillCategory.updateMany({
      where: { id, userId },
      data: { name },
    });

    if (updated.count === 0) {
      return res.status(404).json({
        success: false,
        message: "Category not found or unauthorized",
      });
    }

    res.json({ success: true, message: "Category updated" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Delete Category (user-scoped)
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    await prisma.skillCategory.deleteMany({
      where: { id, userId },
    });

    res.json({ success: true, message: "Category deleted" });
  } catch (err) {
    // Handle foreign key violations
    if (err.code === "P2003") {
      return res.status(409).json({
        success: false,
        message: "Cannot delete category with linked skills",
      });
    }

    res.status(500).json({ success: false, error: err.message });
  }
};

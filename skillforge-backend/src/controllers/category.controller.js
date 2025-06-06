const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

// Create category (admin only)
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name)
      return res
        .status(400)
        .json({ success: false, message: "Name is required" });

    const exists = await prisma.skillCategory.findUnique({ where: { name } });
    if (exists)
      return res
        .status(409)
        .json({ success: false, message: "Category already exists" });

    const category = await prisma.skillCategory.create({ data: { name } });
    res.status(201).json({ success: true, data: category });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await prisma.skillCategory.findMany({
      orderBy: { name: "asc" },
    });
    res.json({ success: true, count: categories.length, data: categories });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Update category
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updated = await prisma.skillCategory.update({
      where: { id },
      data: { name },
    });

    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Delete category
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.skillCategory.delete({ where: { id } });
    res.json({ success: true, message: "Category deleted" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

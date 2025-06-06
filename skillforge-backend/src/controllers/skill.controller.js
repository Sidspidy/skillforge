const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

exports.addSkill = async (req, res) => {
  try {
    const { name, level, notes, categoryId } = req.body;
    const userId = req.user.id;

    if (!name || !level || !categoryId) {
      return res
        .status(400)
        .json({ success: false, message: "Missing fields" });
    }

    const skill = await prisma.skill.create({
      data: {
        name,
        level,
        notes,
        categoryId,
        userId: userId,
      },
      include: { category: true },
    });

    res.status(201).json({ success: true, data: skill });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: err.message });
  }
};

exports.getMySkills = async (req, res) => {
  try {
    const { search, categoryId, level } = req.query;
    const userId = req.user.id;

    const skills = await prisma.skill.findMany({
      where: {
        userId: userId,
        name: search ? { contains: search, mode: "insensitive" } : undefined,
        categoryId: categoryId || undefined,
        level: level || undefined,
      },
      include: {
        category: { select: { id: true, name: true } },
      },
      orderBy: { updatedAt: "desc" },
    });

    res.json({ success: true, count: skills.length, data: skills });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: err.message });
  }
};

exports.updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, level, notes, categoryId } = req.body;

    const skill = await prisma.skill.update({
      where: { id },
      data: { name, level, notes, categoryId },
      include: { category: true },
    });

    res.json({ success: true, data: skill });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Update failed", error: err.message });
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.skill.delete({ where: { id } });

    res.json({ success: true, message: "Skill deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Delete failed", error: err.message });
  }
};

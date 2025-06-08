const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();
const { startOfWeek, endOfWeek } = require("date-fns");

// Get or create this week's plan (user-scoped)
exports.getOrCreateWeekPlan = async (req, res) => {
  try {
    const userId = req.user.id;
    const startDate = startOfWeek(new Date(), { weekStartsOn: 1 });
    const endDate = endOfWeek(new Date(), { weekStartsOn: 1 });

    let weekPlan = await prisma.weekPlan.findFirst({
      where: { userId, startDate },
      include: { goals: true, reflection: true },
    });

    if (!weekPlan) {
      weekPlan = await prisma.weekPlan.create({
        data: { userId, startDate, endDate },
        include: { goals: true, reflection: true },
      });
    }

    res.json({ success: true, data: weekPlan });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Add a new goal (user-scoped via weekPlan)
exports.addGoal = async (req, res) => {
  try {
    const { weekPlanId, title, skillId, notes } = req.body;
    const userId = req.user.id;

    const plan = await prisma.weekPlan.findFirst({
      where: { id: weekPlanId, userId },
    });

    if (!plan) {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized or invalid week plan" });
    }

    const goal = await prisma.goal.create({
      data: { weekPlanId, title, skillId, notes },
    });

    res.status(201).json({ success: true, data: goal });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Update goal (user-scoped)
exports.updateGoal = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, status, notes } = req.body;
    const userId = req.user.id;

    const goal = await prisma.goal.findUnique({
      where: { id },
      include: { weekPlan: true },
    });

    if (!goal || goal.weekPlan.userId !== userId) {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized or not found" });
    }

    const updated = await prisma.goal.update({
      where: { id },
      data: { title, status, notes },
    });

    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Delete goal (user-scoped)
exports.deleteGoal = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const goal = await prisma.goal.findUnique({
      where: { id },
      include: { weekPlan: true },
    });

    if (!goal || goal.weekPlan.userId !== userId) {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized or not found" });
    }

    await prisma.goal.delete({ where: { id } });
    res.json({ success: true, message: "Goal removed" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Submit a reflection (user-scoped via weekPlan)
exports.submitReflection = async (req, res) => {
  try {
    const { weekPlanId, summary, challenges, wins, ideas } = req.body;
    const userId = req.user.id;

    const plan = await prisma.weekPlan.findFirst({
      where: { id: weekPlanId, userId },
    });

    if (!plan) {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized or invalid week plan" });
    }

    const reflection = await prisma.reflection.create({
      data: { weekPlanId, summary, challenges, wins, ideas },
    });

    res.status(201).json({ success: true, data: reflection });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

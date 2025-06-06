const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();
const { startOfWeek, endOfWeek } = require("date-fns");

// Auto-fetch or create this week's plan
exports.getOrCreateWeekPlan = async (req, res) => {
  try {
    const userId = req.user.id;
    const startDate = startOfWeek(new Date(), { weekStartsOn: 1 }); // Monday
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

// Add a new goal
exports.addGoal = async (req, res) => {
  try {
    const { weekPlanId, title, skillId, notes } = req.body;
    const goal = await prisma.goal.create({
      data: { weekPlanId, title, skillId, notes },
    });
    res.status(201).json({ success: true, data: goal });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Update goal status or content
exports.updateGoal = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, status, notes } = req.body;

    const updated = await prisma.goal.update({
      where: { id },
      data: { title, status, notes },
    });

    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Delete a goal
exports.deleteGoal = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.goal.delete({ where: { id } });
    res.json({ success: true, message: "Goal removed" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Submit a weekly reflection
exports.submitReflection = async (req, res) => {
  try {
    const { weekPlanId, summary, challenges, wins, ideas } = req.body;

    const reflection = await prisma.reflection.create({
      data: { weekPlanId, summary, challenges, wins, ideas },
    });

    res.status(201).json({ success: true, data: reflection });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

exports.getDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    const currentWeek = await prisma.weekPlan.findFirst({
      where: { userId },
      orderBy: { startDate: "desc" },
      include: {
        goals: true,
        reflection: true,
      },
    });

    if (!currentWeek) {
      return res.json({ success: true, data: { message: "No plan yet." } });
    }

    const totalGoals = currentWeek.goals.length;
    const completedGoals = currentWeek.goals.filter(
      (g) => g.status === "COMPLETED"
    ).length;
    const inProgress = currentWeek.goals.filter(
      (g) => g.status === "IN_PROGRESS"
    ).length;
    const pending = totalGoals - completedGoals - inProgress;

    res.json({
      success: true,
      data: {
        weekStart: currentWeek.startDate,
        totalGoals,
        completedGoals,
        inProgress,
        pending,
        completionRate: totalGoals
          ? ((completedGoals / totalGoals) * 100).toFixed(1) + "%"
          : "0%",
        hasReflection: !!currentWeek.reflection,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getMomentum = async (req, res) => {
  try {
    const userId = req.user.id;

    const plans = await prisma.weekPlan.findMany({
      where: { userId },
      orderBy: { startDate: "asc" },
      include: { goals: true },
    });

    const history = plans.map((week) => {
      const total = week.goals.length;
      const completed = week.goals.filter(
        (g) => g.status === "COMPLETED"
      ).length;
      const completionRate = total ? completed / total : 0;

      return {
        week: week.startDate.toISOString().slice(0, 10),
        totalGoals: total,
        completed,
        rate: +(completionRate * 100).toFixed(1),
      };
    });

    // Compute streak
    let streak = 0;
    for (let i = history.length - 1; i >= 0; i--) {
      if (history[i].rate >= 60) streak++;
      else break;
    }

    const avgRate =
      history.reduce((acc, h) => acc + h.rate, 0) / (history.length || 1);
    const productivityScore = Math.min(
      100,
      avgRate * 0.7 + streak * 10
    ).toFixed(1);

    res.json({
      success: true,
      data: {
        history,
        streak,
        avgCompletionRate: avgRate.toFixed(1),
        productivityScore,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

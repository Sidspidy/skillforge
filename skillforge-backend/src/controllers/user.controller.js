const { PrismaClient } = require("../generated/prisma");
const { hashPassword } = require("../utils/hash.util");
const prisma = new PrismaClient();

const userController = {
  getProfile: async (req, res) => {
    const userId = req.user.id;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, name: true, createdAt: true },
    });

    res.json({ success: true, data: user });
  },

  updateProfile: async (req, res) => {
    const { name, password } = req.body;
    const userId = req.user.id;

    const updatedData = {};
    if (name) updatedData.name = name;
    if (password) updatedData.password = await hashPassword(password); // secure!

    const user = await prisma.user.update({
      where: { id: userId },
      data: updatedData,
      select: { id: true, email: true, name: true },
    });

    res.json({ success: true, data: user });
  },
};

module.exports = userController;

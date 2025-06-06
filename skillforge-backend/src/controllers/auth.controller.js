const { PrismaClient } = require("../generated/prisma");
const bcrypt = require("bcrypt");
const { registerSchema, loginSchema } = require("../validations/auth.schema");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

const authController = {
  register: async (req, res) => {
    try {
      const data = registerSchema.parse(req.body);

      const existing = await prisma.user.findUnique({
        where: { email: data.email },
      });
      if (existing)
        return res.status(400).json({ message: "Email already in use" });

      const hashedPassword = await bcrypt.hash(data.password, 10);

      const user = await prisma.user.create({
        data: {
          email: data.email,
          password: hashedPassword,
          name: data.name,
        },
      });

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { algorithm: "HS256", expiresIn: "365d" }
      );

      res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: {
          token,
          user,
        },
      });
    } catch (error) {
      if (error.name === "ZodError") {
        return res.status(422).json({ success: false, errors: error.errors });
      }
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  },

  login: async (req, res) => {
    try {
      const data = loginSchema.parse(req.body);

      const user = await prisma.user.findUnique({
        where: { email: data.email },
      });
      if (!user) return res.status(404).json({ message: "User not found" });

      const match = await bcrypt.compare(data.password, user.password);
      if (!match)
        return res.status(401).json({ message: "Invalid credentials" });
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { algorithm: "HS256", expiresIn: "365d" }
      );
      res.status(200).json({
        success: true,
        message: "Login successful",
        data: { token },
      });
    } catch (error) {
      if (error.name === "ZodError") {
        return res.status(422).json({ success: false, errors: error.errors });
      }
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  },
};

module.exports = authController;

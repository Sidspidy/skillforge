const jwt = require("jsonwebtoken");
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const authenticate = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  // Ensure token exists and starts with "Bearer"
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send("Access Denied. No Token Provided.");
  }

  const token = authHeader.split(" ")[1]; // Extract token
  if (!token) {
    return res.status(401).send("Access Denied. No Token Provided.");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Actually check if user exists in the database since DB could be reset
    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    });

    if (!user) {
      return res.status(401).send("User not found or deleted. Please log in again.");
    }

    req.user = decoded; // Attach user info to request
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).send("Token Expired.");
    }
    return res.status(403).send("Invalid Token.");
  }
};

module.exports = { authenticate };

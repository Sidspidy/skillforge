const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  // Ensure token exists and starts with "Bearer"
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send("Access Denied. No Token Provided.");
  }

  const token = authHeader.split(" ")[1]; // Extract token
  if (!token) {
    return res.status(401).send("Access Denied. No Token Provided.");
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send("Invalid Token.");
    req.user = user; // Attach user info to request
    next();
  });
};

module.exports = { authenticate };

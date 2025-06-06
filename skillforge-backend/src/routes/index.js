const path = require("path");

const initializeRoutes = (app) => {
  app.use("/api/auth", require("./auth.routes"));
  app.use("/api/user", require("./user.routes"));
  app.use("/api/dashboard", require("./dashboard.routes"));
  app.use("/api/skills", require("./skill.routes"));
  app.use("/api/categories", require("./category.routes"));
  app.use("/api/planner", require("./planner.routes"));
};

module.exports = initializeRoutes;

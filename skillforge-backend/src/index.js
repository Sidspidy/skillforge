require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const initializeRoutes = require("./routes/index");

// CORS Middleware
app.use(cors({ origin: "*" }));

app.use(express.json());
initializeRoutes(app);

app.listen(5000, () => console.log("🚀 Server running on port 5000"));

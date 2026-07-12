const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dashboardRoutes = require("./routes/dashboardRoutes");
const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/dashboard", dashboardRoutes);
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "EcoSphere AI Backend",
    version: "1.0.0",
  });
});

module.exports = app;
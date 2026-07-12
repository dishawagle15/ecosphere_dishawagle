
const reportRoutes = require("./routes/reportRoutes");
console.log("Report Routes:", reportRoutes);
const governanceRoutes = require("./routes/governanceRoutes");
console.log("Governance Routes:", governanceRoutes);
const socialRoutes = require("./routes/socialRoutes");
const environmentalRoutes = require("./routes/environmentalRoutes");
console.log("environmentalRoutes imported");
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
app.use("/api/environmental", environmentalRoutes);
app.use("/api/social", socialRoutes);
// app.use("/api/governance", governanceRoutes);
app.use("/api/reports", reportRoutes);
console.log("/api/reports registered");
console.log("/api/environmental registered");
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "EcoSphere AI Backend",
    version: "1.0.0",
  });
});

module.exports = app;
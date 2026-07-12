const { getReportData } = require("../services/reportService");

const getReport = (req, res) => {
  try {
    const data = getReportData();

    res.status(200).json({
      success: true,
      message: "Report data fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch report data",
      error: error.message,
    });
  }
};

module.exports = {
  getReport,
};
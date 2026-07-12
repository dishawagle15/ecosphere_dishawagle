const {
  getEnvironmentalData,
} = require("../services/environmentalService");

const getEnvironmental = (req, res) => {
  try {
    const data = getEnvironmentalData();

    res.status(200).json({
      success: true,
      message: "Environmental data fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch environmental data",
      error: error.message,
    });
  }
};

module.exports = {
  getEnvironmental,
};
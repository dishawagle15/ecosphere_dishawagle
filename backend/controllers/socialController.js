const { getSocialData } = require("../services/socialService");

const getSocial = (req, res) => {
  try {
    const data = getSocialData();

    res.status(200).json({
      success: true,
      message: "Social data fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch social data",
      error: error.message,
    });
  }
};

module.exports = {
  getSocial,
};
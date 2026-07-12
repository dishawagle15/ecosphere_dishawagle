const { getGovernanceData } = require("../services/governanceService");

const getGovernance = (req, res) => {
  try {
    const data = getGovernanceData();

    res.status(200).json({
      success: true,
      message: "Governance data fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch governance data",
      error: error.message,
    });
  }
};

module.exports = {
  getGovernance,
};
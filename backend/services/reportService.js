const getReportData = () => {
  return {
    company: "EcoSphere AI Demo",

    overallScore: 87,

    environmental: {
      score: 84,
      carbonEmissions: 142,
      renewableEnergy: 64,
    },

    social: {
      score: 89,
      employeeSatisfaction: 89,
      diversityIndex: 76,
    },

    governance: {
      score: 94,
      complianceScore: 94,
      activePolicies: 28,
    },

    departmentRankings: [
      { department: "Engineering", score: 95 },
      { department: "Operations", score: 90 },
      { department: "HR", score: 87 },
      { department: "Finance", score: 82 },
    ],

    carbonTrend: [
      { month: "Jan", emissions: 210 },
      { month: "Feb", emissions: 185 },
      { month: "Mar", emissions: 168 },
      { month: "Apr", emissions: 155 },
      { month: "May", emissions: 142 },
    ],
  };
};

module.exports = {
  getReportData,
};
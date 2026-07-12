const getDashboardData = () => {
  return {
    overallScore: 87,
    environmentalScore: 91,
    socialScore: 84,
    governanceScore: 86,

    carbonTrend: [
      { month: "Jan", emissions: 210 },
      { month: "Feb", emissions: 185 },
      { month: "Mar", emissions: 168 },
      { month: "Apr", emissions: 155 },
      { month: "May", emissions: 142 },
    ],

    recentActivities: [
      {
        id: 1,
        title: "Tree Plantation Drive",
        status: "Completed",
      },
      {
        id: 2,
        title: "Carbon Audit",
        status: "In Progress",
      },
      {
        id: 3,
        title: "ESG Policy Review",
        status: "Completed",
      },
    ],
  };
};

module.exports = {
  getDashboardData,
};
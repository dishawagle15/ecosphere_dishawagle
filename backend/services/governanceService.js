const getGovernanceData = () => {
  return {
    complianceScore: 94,
    activePolicies: 28,
    auditsCompleted: 15,
    openRisks: 4,

    policies: [
      {
        id: 1,
        title: "Code of Conduct",
        status: "Active",
      },
      {
        id: 2,
        title: "Data Privacy Policy",
        status: "Active",
      },
      {
        id: 3,
        title: "Anti-Bribery Policy",
        status: "Under Review",
      },
    ],
  };
};

module.exports = {
  getGovernanceData,
};
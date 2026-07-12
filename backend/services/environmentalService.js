const getEnvironmentalData = () => {
  return {
    carbonEmissions: 142,
    energyConsumption: 4580,
    waterUsage: 12300,
    wasteRecycled: 78,
    renewableEnergy: 64,

    monthlyCarbon: [
      { month: "Jan", emissions: 210 },
      { month: "Feb", emissions: 185 },
      { month: "Mar", emissions: 168 },
      { month: "Apr", emissions: 155 },
      { month: "May", emissions: 142 },
    ],

    sustainabilityGoals: [
      {
        id: 1,
        title: "Reduce Carbon Footprint",
        progress: 82,
      },
      {
        id: 2,
        title: "Increase Renewable Energy",
        progress: 64,
      },
      {
        id: 3,
        title: "Zero Waste Initiative",
        progress: 71,
      },
    ],
  };
};

module.exports = {
  getEnvironmentalData,
};
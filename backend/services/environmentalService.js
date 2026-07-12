const getEnvironmentalData = () => {
  return {
    carbonEmissions: 142,
    energyConsumption: 4580,
    waterUsage: 12300,
    wasteRecycled: 78,
    renewableEnergy: 64,
    emissionFactors: [
  {
    id: 1,
    source: "solar power grid",
    scope: "Scope 2",
    factor: "0.716 kgCO2e/kWh",
    region: "India",
    status: "Active",
  },
  {
    id: 2,
    source: "Diesel generator",
    scope: "Scope 1",
    factor: "2.68 kgCO2e/litre",
    region: "India",
    status: "Review",
  },
  {
    id: 3,
    source: "Business travel",
    scope: "Scope 3",
    factor: "0.15 kgCO2e/km",
    region: "Global",
    status: "Active",
  },
],

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
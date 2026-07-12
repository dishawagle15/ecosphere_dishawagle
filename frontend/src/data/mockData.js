export const dashboardScores = [
  { id: "overall", label: "Overall ESG Score", value: 84, delta: "+6 pts", tone: "emerald" },
  { id: "environmental", label: "Environmental", value: 78, delta: "-21.8% CO2e" },
  { id: "social", label: "Social", value: 88, delta: "+12% participation" },
  { id: "governance", label: "Governance", value: 91, delta: "3 audits closed" },
];

export const carbonTrend = [
  { month: "Jan", emissions: 142 },
  { month: "Feb", emissions: 136 },
  { month: "Mar", emissions: 131 },
  { month: "Apr", emissions: 124 },
  { month: "May", emissions: 119 },
  { month: "Jun", emissions: 111 },
  { month: "Jul", emissions: 106 },
];

export const departmentScores = [
  { name: "Operations", score: 92 },
  { name: "Supply Chain", score: 87 },
  { name: "Human Resources", score: 84 },
  { name: "Finance", score: 79 },
  { name: "Manufacturing", score: 76 },
];

export const recentActivities = [
  "Carbon transaction approved for Plant A",
  "CSR literacy drive completed in Pune",
  "Anti-bribery policy acknowledged by 82% staff",
  "Q2 ESG summary exported by Compliance",
];

export const initialEmissionFactors = [
  { id: "ef-1", source: "Grid electricity", scope: "Scope 2", factor: "0.716 kgCO2e/kWh", region: "India", status: "Active" },
  { id: "ef-2", source: "Diesel generator", scope: "Scope 1", factor: "2.68 kgCO2e/litre", region: "India", status: "Review" },
  { id: "ef-3", source: "Business travel", scope: "Scope 3", factor: "0.15 kgCO2e/km", region: "Global", status: "Active" },
];

export const initialProductProfiles = [
  { id: "pp-1", product: "EcoPack Carton", category: "Packaging", score: 86, footprint: "1.8 kgCO2e", status: "Published" },
  { id: "pp-2", product: "Smart Sensor Pro", category: "Electronics", score: 73, footprint: "8.4 kgCO2e", status: "Draft" },
  { id: "pp-3", product: "Recycled Fiber Sheet", category: "Materials", score: 91, footprint: "0.7 kgCO2e", status: "Published" },
];

export const initialCarbonTransactions = [
  { id: "ct-1", department: "Operations", type: "Electricity", amount: "42.6 tCO2e", date: "2026-07-02", status: "Approved" },
  { id: "ct-2", department: "Supply Chain", type: "Logistics", amount: "18.2 tCO2e", date: "2026-07-04", status: "Pending" },
  { id: "ct-3", department: "Manufacturing", type: "Fuel", amount: "27.9 tCO2e", date: "2026-07-08", status: "Rejected" },
];

export const initialEnvironmentalGoals = [
  { id: "eg-1", goal: "Reduce Scope 2 emissions by 18%", owner: "Facilities", progress: 68, due: "2026-09-30", status: "On Track" },
  { id: "eg-2", goal: "Convert 40% fleet to EV", owner: "Logistics", progress: 44, due: "2026-12-15", status: "At Risk" },
  { id: "eg-3", goal: "Zero landfill pilot", owner: "Operations", progress: 82, due: "2026-08-20", status: "On Track" },
];

export const csrActivities = [
  { id: "csr-1", title: "Rural solar classroom", location: "Nashik", budget: "₹8.2L", status: "Approved", volunteers: 48 },
  { id: "csr-2", title: "Women in STEM workshops", location: "Bengaluru", budget: "₹5.4L", status: "In Review", volunteers: 31 },
  { id: "csr-3", title: "Urban tree plantation", location: "Pune", budget: "₹3.1L", status: "Completed", volunteers: 126 },
];

export const employeeParticipation = [
  { id: "emp-1", employee: "Aarav Mehta", department: "Operations", activity: "Tree plantation", hours: 12, status: "Approved" },
  { id: "emp-2", employee: "Neha Rao", department: "Finance", activity: "Financial literacy", hours: 8, status: "Pending" },
  { id: "emp-3", employee: "Isha Kapoor", department: "HR", activity: "STEM mentorship", hours: 10, status: "Approved" },
  { id: "emp-4", employee: "Kabir Sethi", department: "Supply Chain", activity: "Beach cleanup", hours: 6, status: "Rejected" },
];

export const diversityMetrics = [
  { label: "Women in leadership", value: "38%", change: "+5%" },
  { label: "Persons with disabilities", value: "3.8%", change: "+0.7%" },
  { label: "Regional representation", value: "22 states", change: "+4" },
];

export const policies = [
  { id: "pol-1", name: "Anti-bribery and corruption", owner: "Legal", status: "Active", acknowledged: "82%" },
  { id: "pol-2", name: "Supplier code of conduct", owner: "Procurement", status: "Review", acknowledged: "64%" },
  { id: "pol-3", name: "Data privacy policy", owner: "IT Security", status: "Active", acknowledged: "91%" },
];

export const acknowledgements = [
  { id: "ack-1", department: "Finance", policy: "Anti-bribery", completion: "94%", status: "Complete" },
  { id: "ack-2", department: "Sales", policy: "Data privacy", completion: "71%", status: "Pending" },
  { id: "ack-3", department: "Procurement", policy: "Supplier code", completion: "62%", status: "At Risk" },
];

export const audits = [
  { id: "aud-1", audit: "ISO 14001 surveillance", owner: "EHS", date: "2026-07-18", status: "Scheduled" },
  { id: "aud-2", audit: "Supplier ESG sampling", owner: "Procurement", date: "2026-07-25", status: "In Progress" },
  { id: "aud-3", audit: "CSR fund utilization", owner: "Finance", date: "2026-08-02", status: "Closed" },
];

export const complianceIssues = [
  { id: "ci-1", issue: "Delayed hazardous waste return", severity: "High", owner: "Plant A", status: "Open" },
  { id: "ci-2", issue: "Supplier disclosure missing", severity: "Medium", owner: "Procurement", status: "Investigating" },
  { id: "ci-3", issue: "Policy training overdue", severity: "Low", owner: "Sales", status: "Mitigated" },
];

export const challenges = [
  { id: "ch-1", title: "Reduce office energy by 10%", points: 600, status: "Live", participants: 142 },
  { id: "ch-2", title: "Cycle-to-work week", points: 350, status: "Live", participants: 84 },
  { id: "ch-3", title: "Zero paper sprint", points: 450, status: "Upcoming", participants: 38 },
];

export const challengeParticipation = [
  { id: "cp-1", team: "Operations", challenge: "Energy reduction", progress: "74%", rank: 1 },
  { id: "cp-2", team: "Finance", challenge: "Zero paper", progress: "61%", rank: 2 },
  { id: "cp-3", team: "HR", challenge: "Volunteer hours", progress: "55%", rank: 3 },
];

export const badges = [
  { id: "bd-1", name: "Carbon Saver", holders: 128 },
  { id: "bd-2", name: "CSR Champion", holders: 73 },
  { id: "bd-3", name: "Policy Pro", holders: 212 },
];

export const rewards = [
  { id: "rw-1", name: "Sustainability grant", cost: "2,500 XP", stock: 8 },
  { id: "rw-2", name: "Volunteer day pass", cost: "1,200 XP", stock: 21 },
  { id: "rw-3", name: "Green desk kit", cost: "800 XP", stock: 43 },
];

export const leaderboard = [
  { id: "lb-1", employee: "Aarav Mehta", department: "Operations", xp: 4820 },
  { id: "lb-2", employee: "Isha Kapoor", department: "HR", xp: 4310 },
  { id: "lb-3", employee: "Neha Rao", department: "Finance", xp: 3975 },
  { id: "lb-4", employee: "Kabir Sethi", department: "Supply Chain", xp: 3650 },
];

export const reportCards = [
  { id: "r-1", title: "Environmental Report", owner: "EHS", updated: "Today", status: "Ready" },
  { id: "r-2", title: "Social Report", owner: "CSR", updated: "Yesterday", status: "Draft" },
  { id: "r-3", title: "Governance Report", owner: "Compliance", updated: "Jul 8", status: "Ready" },
  { id: "r-4", title: "ESG Summary", owner: "Strategy", updated: "Jul 6", status: "Ready" },
];

export const initialDepartments = [
  { id: "dep-1", name: "Operations", head: "Riya Sharma", users: 126, status: "Active" },
  { id: "dep-2", name: "Supply Chain", head: "Karan Malhotra", users: 84, status: "Active" },
  { id: "dep-3", name: "Finance", head: "Meera Joshi", users: 52, status: "Active" },
];

export const initialCategories = [
  { id: "cat-1", name: "Energy", module: "Environmental", status: "Active" },
  { id: "cat-2", name: "CSR Education", module: "Social", status: "Active" },
  { id: "cat-3", name: "Policy Controls", module: "Governance", status: "Active" },
];

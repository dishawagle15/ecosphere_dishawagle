import {
  ArrowUpRight,
  Award,
  Building2,
  ClipboardCheck,
  FileText,
  Leaf,
  Plus,
  Recycle,
  Target,
  TrendingDown,
  Users,
} from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useEffect, useState } from "react";
import Card, { CardHeader } from "../components/ui/Card.jsx";
import { SkeletonGrid } from "../components/ui/Skeleton.jsx";
import useToast from "../hooks/useToast.js";
import {
  carbonTrend,
  dashboardScores,
  departmentScores,
  recentActivities,
} from "../data/mockData.js";

const quickActions = [
  { label: "Add ESG Goal", icon: Target },
  { label: "Log Carbon Data", icon: Recycle },
  { label: "Create Report", icon: FileText },
  { label: "Invite Team", icon: Plus },
];

function Dashboard() {
  const { showToast } = useToast();
  const cardIcons = [Award, Leaf, Users, ClipboardCheck];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 350);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700">
            Dashboard
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-normal text-slate-950">
            ESG performance overview
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Monitor sustainability progress, carbon reduction, department rankings,
            and priority actions from one enterprise workspace.
          </p>
        </div>
        <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 text-sm font-semibold text-white transition hover:bg-emerald-700">
          <ArrowUpRight size={17} aria-hidden="true" />
          Export summary
        </button>
      </div>

      {isLoading ? (
        <SkeletonGrid />
      ) : (
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardScores.map((card, index) => {
            const Icon = cardIcons[index];

            return (
              <Card
                key={card.label}
                className={card.tone === "emerald" ? "border-emerald-200 bg-emerald-600 p-5 text-white" : "p-5"}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className={card.tone === "emerald" ? "text-sm font-medium text-emerald-50" : "text-sm font-medium text-slate-500"}>{card.label}</p>
                    <p className={card.tone === "emerald" ? "mt-3 text-4xl font-semibold tracking-normal text-white" : "mt-3 text-4xl font-semibold tracking-normal text-slate-950"}>
                      {card.value}
                    </p>
                  </div>
                  <div
                    className={card.tone === "emerald" ? "flex size-11 items-center justify-center rounded-md bg-white/15 text-white" : "flex size-11 items-center justify-center rounded-md border border-emerald-100 bg-emerald-50 text-emerald-700"}
                  >
                    <Icon size={21} aria-hidden="true" />
                  </div>
                </div>
                <p className={card.tone === "emerald" ? "mt-4 text-sm text-emerald-50" : "mt-4 text-sm text-emerald-700"}>{card.delta}</p>
              </Card>
            );
          })}
        </section>
      )}

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(320px,1fr)]">
        <Card>
          <CardHeader
            title="Carbon emissions trend"
            description="Monthly emissions in tCO2e"
            action={
            <div className="flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
              <TrendingDown size={16} aria-hidden="true" />
              21.8% down
            </div>
            }
          />
          <div className="h-72 p-5">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={carbonTrend} margin={{ left: -24, right: 12 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="emissions"
                  stroke="#059669"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "#059669" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
              <Building2 size={20} aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-950">
                Department rankings
              </h2>
              <p className="text-sm text-slate-500">ESG score by team</p>
            </div>
          </div>
          <div className="space-y-4">
            {departmentScores.map((department, index) => (
              <div key={department.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">{department.name}</span>
                  <span className="font-semibold text-emerald-700">
                    {department.score}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-emerald-600"
                    style={{ width: `${department.score}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-slate-500">Rank #{index + 1}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="p-5">
          <h2 className="text-lg font-semibold text-slate-950">Recent activity</h2>
          <div className="mt-5 space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity} className="flex gap-3">
                <div className="mt-1 size-2 rounded-full bg-emerald-500" />
                <p className="text-sm leading-6 text-slate-600">{activity}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <h2 className="text-lg font-semibold text-slate-950">Quick actions</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <button
                  key={action.label}
                  type="button"
                  onClick={() => showToast(`${action.label} opened`)}
                  className="flex h-20 items-center gap-3 rounded-md border border-slate-200 bg-white px-4 text-left text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <span className="flex size-10 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  {action.label}
                </button>
              );
            })}
          </div>
        </Card>
      </section>
    </div>
  );
}

export default Dashboard;

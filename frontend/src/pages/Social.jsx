import { HeartHandshake, UsersRound, VenusAndMars } from "lucide-react";
import Card, { CardHeader } from "../components/ui/Card.jsx";
import DataTable from "../components/ui/DataTable.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";
import { csrActivities, diversityMetrics, employeeParticipation } from "../data/mockData.js";

const approvalTone = {
  Approved: "emerald",
  Completed: "emerald",
  Pending: "amber",
  "In Review": "blue",
  Rejected: "rose",
};

function Social() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700">Social</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Social impact workspace</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">Manage CSR activities, employee participation, approvals, and diversity indicators across the enterprise.</p>
      </div>

      <section className="grid gap-4 lg:grid-cols-3">
        {csrActivities.map((activity) => (
          <Card key={activity.id} className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex size-11 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                <HeartHandshake size={21} aria-hidden="true" />
              </div>
              <StatusBadge tone={approvalTone[activity.status]}>{activity.status}</StatusBadge>
            </div>
            <h2 className="mt-4 text-base font-semibold text-slate-950">{activity.title}</h2>
            <p className="mt-2 text-sm text-slate-500">{activity.location}</p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-md bg-slate-50 p-3">
                <p className="text-slate-500">Budget</p>
                <p className="mt-1 font-semibold text-slate-950">{activity.budget}</p>
              </div>
              <div className="rounded-md bg-slate-50 p-3">
                <p className="text-slate-500">Volunteers</p>
                <p className="mt-1 font-semibold text-slate-950">{activity.volunteers}</p>
              </div>
            </div>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(300px,0.8fr)]">
        <DataTable
          title="Employee Participation"
          data={employeeParticipation}
          searchFields={["employee", "department", "activity", "status"]}
          searchPlaceholder="Search employees or activities"
          columns={[
            { key: "employee", header: "Employee" },
            { key: "department", header: "Department" },
            { key: "activity", header: "Activity" },
            { key: "hours", header: "Hours" },
            { key: "status", header: "Approval", render: (row) => <StatusBadge tone={approvalTone[row.status]}>{row.status}</StatusBadge> },
          ]}
        />
        <Card>
          <CardHeader title="Diversity Dashboard" description="Core social inclusion indicators" />
          <div className="space-y-4 p-5">
            {diversityMetrics.map((metric) => (
              <div key={metric.label} className="rounded-md border border-slate-200 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                    <VenusAndMars size={19} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">{metric.label}</p>
                    <p className="mt-1 text-2xl font-semibold text-slate-950">{metric.value}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm font-medium text-emerald-700">{metric.change} this quarter</p>
              </div>
            ))}
            <div className="rounded-md bg-emerald-50 p-4 text-sm text-emerald-800">
              <UsersRound className="mb-2" size={19} aria-hidden="true" />
              Employee volunteering hours increased 18% quarter over quarter.
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default Social;

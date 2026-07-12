import { AlertTriangle, FileCheck2, Gavel, ShieldCheck } from "lucide-react";
import Card, { CardHeader } from "../components/ui/Card.jsx";
import DataTable from "../components/ui/DataTable.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";
import { acknowledgements, audits, complianceIssues, policies } from "../data/mockData.js";

const statusTone = {
  Active: "emerald",
  Review: "amber",
  Complete: "emerald",
  Pending: "amber",
  "At Risk": "rose",
  Scheduled: "blue",
  "In Progress": "amber",
  Closed: "emerald",
  Open: "rose",
  Investigating: "amber",
  Mitigated: "emerald",
};

const severityTone = {
  High: "rose",
  Medium: "amber",
  Low: "blue",
};

function Governance() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700">Governance</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Governance control center</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">Track policies, acknowledgements, audits, and compliance issues with status indicators and severity badges.</p>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        <Card className="p-5">
          <ShieldCheck className="text-emerald-600" size={24} aria-hidden="true" />
          <p className="mt-4 text-sm text-slate-500">Active policies</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">12</p>
        </Card>
        <Card className="p-5">
          <FileCheck2 className="text-emerald-600" size={24} aria-hidden="true" />
          <p className="mt-4 text-sm text-slate-500">Acknowledgement rate</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">82%</p>
        </Card>
        <Card className="p-5">
          <AlertTriangle className="text-amber-600" size={24} aria-hidden="true" />
          <p className="mt-4 text-sm text-slate-500">Open issues</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">3</p>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <DataTable
          title="Policies"
          data={policies}
          searchFields={["name", "owner", "status"]}
          columns={[
            { key: "name", header: "Policy" },
            { key: "owner", header: "Owner" },
            { key: "acknowledged", header: "Acknowledged" },
            { key: "status", header: "Status", render: (row) => <StatusBadge tone={statusTone[row.status]}>{row.status}</StatusBadge> },
          ]}
        />
        <DataTable
          title="Policy Acknowledgements"
          data={acknowledgements}
          searchFields={["department", "policy", "status"]}
          columns={[
            { key: "department", header: "Department" },
            { key: "policy", header: "Policy" },
            { key: "completion", header: "Completion" },
            { key: "status", header: "Status", render: (row) => <StatusBadge tone={statusTone[row.status]}>{row.status}</StatusBadge> },
          ]}
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <DataTable
          title="Audits"
          data={audits}
          searchFields={["audit", "owner", "status"]}
          columns={[
            { key: "audit", header: "Audit" },
            { key: "owner", header: "Owner" },
            { key: "date", header: "Date" },
            { key: "status", header: "Status", render: (row) => <StatusBadge tone={statusTone[row.status]}>{row.status}</StatusBadge> },
          ]}
        />
        <Card>
          <CardHeader title="Compliance Issues" description="Severity-led remediation queue" />
          <div className="space-y-3 p-5">
            {complianceIssues.map((issue) => (
              <div key={issue.id} className="rounded-md border border-slate-200 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Gavel size={19} className="text-slate-500" aria-hidden="true" />
                    <p className="font-semibold text-slate-950">{issue.issue}</p>
                  </div>
                  <div className="flex gap-2">
                    <StatusBadge tone={severityTone[issue.severity]}>{issue.severity}</StatusBadge>
                    <StatusBadge tone={statusTone[issue.status]}>{issue.status}</StatusBadge>
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-500">Owner: {issue.owner}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}

export default Governance;

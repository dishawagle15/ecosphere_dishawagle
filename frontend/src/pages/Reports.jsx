import { Download, FileBarChart, FileCog, FileText, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import Card, { CardHeader } from "../components/ui/Card.jsx";
import DataTable from "../components/ui/DataTable.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";
import useToast from "../hooks/useToast.js";
import { reportCards } from "../data/mockData.js";

const reportTypes = ["Environmental Report", "Social Report", "Governance Report", "ESG Summary"];

function Reports() {
  const { showToast } = useToast();
  const [builder, setBuilder] = useState({ type: "ESG Summary", period: "Q2 2026", format: "PDF" });

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700">Reports</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">ESG reporting suite</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">Generate environmental, social, governance, and summary reports from local mock data. Export buttons are UI only.</p>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {reportCards.map((report) => (
          <Card key={report.id} className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex size-11 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                <FileBarChart size={21} aria-hidden="true" />
              </div>
              <StatusBadge tone={report.status === "Ready" ? "emerald" : "amber"}>{report.status}</StatusBadge>
            </div>
            <h2 className="mt-4 text-base font-semibold text-slate-950">{report.title}</h2>
            <p className="mt-2 text-sm text-slate-500">{report.owner} · Updated {report.updated}</p>
            <div className="mt-5 flex gap-2">
              <button type="button" onClick={() => showToast(`${report.title} preview opened`)} className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">
                Preview
              </button>
              <button type="button" onClick={() => showToast(`${report.title} export queued`)} className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                <Download size={15} aria-hidden="true" />
                Export
              </button>
            </div>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <DataTable
          title="Report Library"
          data={reportCards}
          searchFields={["title", "owner", "status"]}
          columns={[
            { key: "title", header: "Report" },
            { key: "owner", header: "Owner" },
            { key: "updated", header: "Updated" },
            { key: "status", header: "Status", render: (row) => <StatusBadge tone={row.status === "Ready" ? "emerald" : "amber"}>{row.status}</StatusBadge> },
            {
              key: "export",
              header: "Export",
              render: (row) => (
                <button type="button" onClick={() => showToast(`${row.title} export selected`)} className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 hover:border-emerald-200 hover:text-emerald-700">
                  <Download size={15} aria-hidden="true" />
                  Export
                </button>
              ),
            },
          ]}
        />
        <Card>
          <CardHeader title="Custom Report Builder" description="Configure a UI-only export package" />
          <div className="space-y-4 p-5">
            {[
              { key: "type", label: "Report type", options: reportTypes },
              { key: "period", label: "Reporting period", options: ["Q1 2026", "Q2 2026", "FY 2026", "Custom"] },
              { key: "format", label: "Format", options: ["PDF", "XLSX", "CSV"] },
            ].map((field) => (
              <label key={field.key} className="space-y-2 text-sm font-medium text-slate-700">
                <span>{field.label}</span>
                <select value={builder[field.key]} onChange={(event) => setBuilder((current) => ({ ...current, [field.key]: event.target.value }))} className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 outline-none focus:border-emerald-300">
                  {field.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            ))}
            <div className="rounded-md bg-slate-50 p-4 text-sm text-slate-600">
              <SlidersHorizontal size={18} className="mb-2 text-emerald-600" aria-hidden="true" />
              Includes KPI cards, trend charts, tables, and executive summary sections.
            </div>
            <button type="button" onClick={() => showToast(`${builder.type} builder export prepared`)} className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 text-sm font-semibold text-white hover:bg-emerald-700">
              <FileCog size={16} aria-hidden="true" />
              Build custom report
            </button>
            <button type="button" onClick={() => showToast("Template downloaded")} className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-slate-200 px-4 text-sm font-semibold text-slate-600 hover:bg-slate-50">
              <FileText size={16} aria-hidden="true" />
              Download template
            </button>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default Reports;

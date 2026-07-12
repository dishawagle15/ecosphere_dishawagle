import { Edit2, Plus, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import Card, { CardHeader } from "../components/ui/Card.jsx";
import DataTable from "../components/ui/DataTable.jsx";
import Modal from "../components/ui/Modal.jsx";
import RecordForm from "../components/ui/RecordForm.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";
import useToast from "../hooks/useToast.js";
import {
  initialCarbonTransactions,
  initialEmissionFactors,
  initialEnvironmentalGoals,
  initialProductProfiles,
} from "../data/mockData.js";

const tabs = ["Emission Factors", "Product ESG Profiles", "Carbon Transactions", "Environmental Goals"];

const statusTone = {
  Active: "emerald",
  Review: "amber",
  Published: "emerald",
  Draft: "slate",
  Approved: "emerald",
  Pending: "amber",
  Rejected: "rose",
  "On Track": "emerald",
  "At Risk": "rose",
};

function Environmental() {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [records, setRecords] = useState({
    [tabs[0]]: initialEmissionFactors,
    [tabs[1]]: initialProductProfiles,
    [tabs[2]]: initialCarbonTransactions,
    [tabs[3]]: initialEnvironmentalGoals,
  });
  const [editingItem, setEditingItem] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const config = {
    [tabs[0]]: {
      fields: [
        { key: "source", label: "Source" },
        { key: "scope", label: "Scope" },
        { key: "factor", label: "Factor" },
        { key: "region", label: "Region" },
        { key: "status", label: "Status", defaultValue: "Active" },
      ],
      searchFields: ["source", "scope", "region", "status"],
      columns: ["source", "scope", "factor", "region", "status"],
    },
    [tabs[1]]: {
      fields: [
        { key: "product", label: "Product" },
        { key: "category", label: "Category" },
        { key: "score", label: "ESG Score" },
        { key: "footprint", label: "Footprint" },
        { key: "status", label: "Status", defaultValue: "Draft" },
      ],
      searchFields: ["product", "category", "status"],
      columns: ["product", "category", "score", "footprint", "status"],
    },
    [tabs[2]]: {
      fields: [
        { key: "department", label: "Department" },
        { key: "type", label: "Type" },
        { key: "amount", label: "Amount" },
        { key: "date", label: "Date" },
        { key: "status", label: "Status", defaultValue: "Pending" },
      ],
      searchFields: ["department", "type", "status"],
      columns: ["department", "type", "amount", "date", "status"],
    },
    [tabs[3]]: {
      fields: [
        { key: "goal", label: "Goal" },
        { key: "owner", label: "Owner" },
        { key: "progress", label: "Progress" },
        { key: "due", label: "Due Date" },
        { key: "status", label: "Status", defaultValue: "On Track" },
      ],
      searchFields: ["goal", "owner", "status"],
      columns: ["goal", "owner", "progress", "due", "status"],
    },
  };

  const currentRecords = useMemo(() => {
    const data = records[activeTab];
    if (statusFilter === "all") return data;
    return data.filter((item) => item.status === statusFilter);
  }, [activeTab, records, statusFilter]);

  const statusOptions = useMemo(() => {
    const statuses = [...new Set(records[activeTab].map((item) => item.status))];
    return [{ label: "All status", value: "all" }, ...statuses.map((status) => ({ label: status, value: status }))];
  }, [activeTab, records]);

  const openCreateDialog = () => {
    setEditingItem(null);
    setDialogOpen(true);
  };

  const saveRecord = (form) => {
    setRecords((current) => ({
      ...current,
      [activeTab]: editingItem
        ? current[activeTab].map((item) => (item.id === editingItem.id ? { ...item, ...form } : item))
        : [{ ...form, id: `${activeTab}-${Date.now()}` }, ...current[activeTab]],
    }));
    setDialogOpen(false);
    showToast(editingItem ? `${activeTab} updated` : `${activeTab} added`);
  };

  const deleteRecord = (id) => {
    setRecords((current) => ({
      ...current,
      [activeTab]: current[activeTab].filter((item) => item.id !== id),
    }));
    showToast(`${activeTab} deleted`);
  };

  const columns = [
    ...config[activeTab].columns.map((key) => ({
      key,
      header: key.replace(/^\w/, (letter) => letter.toUpperCase()),
      render: (row) => {
        if (key === "status") return <StatusBadge tone={statusTone[row.status] ?? "slate"}>{row.status}</StatusBadge>;
        if (key === "progress") return `${row.progress}%`;
        return row[key];
      },
    })),
    {
      key: "actions",
      header: "Actions",
      render: (row) => (
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              setEditingItem(row);
              setDialogOpen(true);
            }}
            className="rounded-md border border-slate-200 p-2 text-slate-500 hover:border-emerald-200 hover:text-emerald-700"
            aria-label={`Edit ${row.id}`}
          >
            <Edit2 size={15} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => deleteRecord(row.id)} className="rounded-md border border-slate-200 p-2 text-slate-500 hover:border-rose-200 hover:text-rose-600" aria-label={`Delete ${row.id}`}>
            <Trash2 size={15} aria-hidden="true" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700">Environmental</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Environmental management</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">Track emission factors, product ESG profiles, carbon accounting transactions, and reduction goals using local enterprise mock data.</p>
      </div>

      <Card>
        <CardHeader title="Environmental workspace" description="Use the tabs to manage each environmental data object." />
        <div className="flex gap-2 overflow-x-auto p-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => {
                setActiveTab(tab);
                setStatusFilter("all");
              }}
              className={tab === activeTab ? "rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white" : "rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"}
            >
              {tab}
            </button>
          ))}
        </div>
      </Card>

      <DataTable
        title={activeTab}
        data={currentRecords}
        columns={columns}
        searchFields={config[activeTab].searchFields}
        searchPlaceholder={`Search ${activeTab.toLowerCase()}`}
        filters={[{ label: "Status", value: statusFilter, onChange: setStatusFilter, options: statusOptions }]}
        action={
          <button type="button" onClick={openCreateDialog} className="inline-flex h-10 items-center gap-2 rounded-md bg-emerald-600 px-4 text-sm font-semibold text-white hover:bg-emerald-700">
            <Plus size={16} aria-hidden="true" />
            Add
          </button>
        }
        emptyTitle={`No ${activeTab.toLowerCase()} found`}
      />

      <Modal
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title={editingItem ? `Edit ${activeTab}` : `Add ${activeTab}`}
        description="Changes are stored locally in browser state for this frontend prototype."
      >
        <RecordForm
          fields={config[activeTab].fields}
          item={editingItem}
          onCancel={() => setDialogOpen(false)}
          onSave={saveRecord}
        />
      </Modal>
    </div>
  );
}

export default Environmental;

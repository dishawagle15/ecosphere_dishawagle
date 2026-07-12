import { Edit2, Plus, Save, Trash2 } from "lucide-react";
import { useState } from "react";
import Card, { CardHeader } from "../components/ui/Card.jsx";
import DataTable from "../components/ui/DataTable.jsx";
import Modal from "../components/ui/Modal.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";
import useToast from "../hooks/useToast.js";
import { initialCategories, initialDepartments } from "../data/mockData.js";

function SimpleForm({ fields, item, onCancel, onSave }) {
  const [form, setForm] = useState(() => item ?? Object.fromEntries(fields.map((field) => [field.key, field.defaultValue ?? ""])));

  return (
    <form
      className="space-y-4 p-5"
      onSubmit={(event) => {
        event.preventDefault();
        onSave(form);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.key} className="space-y-2 text-sm font-medium text-slate-700">
            <span>{field.label}</span>
            <input
              value={form[field.key] ?? ""}
              onChange={(event) => setForm((current) => ({ ...current, [field.key]: event.target.value }))}
              className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none transition focus:border-emerald-300"
              required
            />
          </label>
        ))}
      </div>
      <div className="flex justify-end gap-3 border-t border-slate-100 pt-4">
        <button type="button" onClick={onCancel} className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">
          Cancel
        </button>
        <button type="submit" className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
          Save
        </button>
      </div>
    </form>
  );
}

function ToggleRow({ label, description, enabled, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-md border border-slate-200 p-4">
      <div>
        <p className="text-sm font-semibold text-slate-950">{label}</p>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
      <button
        type="button"
        onClick={onChange}
        className={enabled ? "relative h-6 w-11 rounded-full bg-emerald-600" : "relative h-6 w-11 rounded-full bg-slate-200"}
        aria-label={label}
      >
        <span className={enabled ? "absolute right-1 top-1 size-4 rounded-full bg-white" : "absolute left-1 top-1 size-4 rounded-full bg-white"} />
      </button>
    </div>
  );
}

function Settings() {
  const { showToast } = useToast();
  const [activeManager, setActiveManager] = useState("Departments");
  const [departments, setDepartments] = useState(initialDepartments);
  const [categories, setCategories] = useState(initialCategories);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [notifications, setNotifications] = useState({
    approvals: true,
    reports: true,
    risk: true,
    rewards: false,
  });
  const [config, setConfig] = useState({
    targetScore: "85",
    reportingCurrency: "INR",
    carbonBoundary: "Operational control",
  });

  const managers = {
    Departments: {
      data: departments,
      setData: setDepartments,
      fields: [
        { key: "name", label: "Department" },
        { key: "head", label: "Head" },
        { key: "users", label: "Users" },
        { key: "status", label: "Status", defaultValue: "Active" },
      ],
      searchFields: ["name", "head", "status"],
      columns: [
        { key: "name", header: "Department" },
        { key: "head", header: "Head" },
        { key: "users", header: "Users" },
        { key: "status", header: "Status", render: (row) => <StatusBadge tone="emerald">{row.status}</StatusBadge> },
      ],
    },
    Categories: {
      data: categories,
      setData: setCategories,
      fields: [
        { key: "name", label: "Category" },
        { key: "module", label: "Module" },
        { key: "status", label: "Status", defaultValue: "Active" },
      ],
      searchFields: ["name", "module", "status"],
      columns: [
        { key: "name", header: "Category" },
        { key: "module", header: "Module" },
        { key: "status", header: "Status", render: (row) => <StatusBadge tone="emerald">{row.status}</StatusBadge> },
      ],
    },
  };

  const activeConfig = managers[activeManager];

  const saveManagerItem = (form) => {
    activeConfig.setData((current) =>
      editingItem
        ? current.map((item) => (item.id === editingItem.id ? { ...item, ...form } : item))
        : [{ ...form, id: `${activeManager}-${Date.now()}` }, ...current],
    );
    setDialogOpen(false);
    showToast(`${activeManager.slice(0, -1)} saved`);
  };

  const deleteManagerItem = (id) => {
    activeConfig.setData((current) => current.filter((item) => item.id !== id));
    showToast(`${activeManager.slice(0, -1)} deleted`);
  };

  const columns = [
    ...activeConfig.columns,
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
          <button type="button" onClick={() => deleteManagerItem(row.id)} className="rounded-md border border-slate-200 p-2 text-slate-500 hover:border-rose-200 hover:text-rose-600" aria-label={`Delete ${row.id}`}>
            <Trash2 size={15} aria-hidden="true" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700">Settings</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Workspace settings</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">Configure departments, categories, ESG scoring assumptions, and notification preferences with local state.</p>
      </div>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-4">
          <Card>
            <CardHeader title="Master Data" description="Manage organizational reference data." />
            <div className="flex gap-2 p-5">
              {Object.keys(managers).map((manager) => (
                <button key={manager} type="button" onClick={() => setActiveManager(manager)} className={activeManager === manager ? "rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white" : "rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"}>
                  {manager}
                </button>
              ))}
            </div>
          </Card>
          <DataTable
            title={activeManager}
            data={activeConfig.data}
            searchFields={activeConfig.searchFields}
            columns={columns}
            action={
              <button
                type="button"
                onClick={() => {
                  setEditingItem(null);
                  setDialogOpen(true);
                }}
                className="inline-flex h-10 items-center gap-2 rounded-md bg-emerald-600 px-4 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                <Plus size={16} aria-hidden="true" />
                Add
              </button>
            }
          />
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader title="ESG Configuration" description="Enterprise scoring settings" />
            <div className="space-y-4 p-5">
              {[
                { key: "targetScore", label: "Target ESG score" },
                { key: "reportingCurrency", label: "Reporting currency" },
                { key: "carbonBoundary", label: "Carbon boundary" },
              ].map((field) => (
                <label key={field.key} className="space-y-2 text-sm font-medium text-slate-700">
                  <span>{field.label}</span>
                  <input value={config[field.key]} onChange={(event) => setConfig((current) => ({ ...current, [field.key]: event.target.value }))} className="h-10 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-emerald-300" />
                </label>
              ))}
              <button type="button" onClick={() => showToast("ESG configuration saved")} className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 text-sm font-semibold text-white hover:bg-emerald-700">
                <Save size={16} aria-hidden="true" />
                Save configuration
              </button>
            </div>
          </Card>
          <Card>
            <CardHeader title="Notification Settings" description="Control workspace alerts" />
            <div className="space-y-3 p-5">
              <ToggleRow label="Approval alerts" description="Notify owners when records need approval." enabled={notifications.approvals} onChange={() => setNotifications((current) => ({ ...current, approvals: !current.approvals }))} />
              <ToggleRow label="Report reminders" description="Weekly reminders for reporting tasks." enabled={notifications.reports} onChange={() => setNotifications((current) => ({ ...current, reports: !current.reports }))} />
              <ToggleRow label="Risk escalation" description="Immediate alerts for high severity issues." enabled={notifications.risk} onChange={() => setNotifications((current) => ({ ...current, risk: !current.risk }))} />
              <ToggleRow label="Reward updates" description="Notify users when new rewards are added." enabled={notifications.rewards} onChange={() => setNotifications((current) => ({ ...current, rewards: !current.rewards }))} />
            </div>
          </Card>
        </div>
      </section>

      <Modal isOpen={dialogOpen} onClose={() => setDialogOpen(false)} title={editingItem ? `Edit ${activeManager.slice(0, -1)}` : `Add ${activeManager.slice(0, -1)}`} description="This change is stored locally for the frontend prototype.">
        <SimpleForm fields={activeConfig.fields} item={editingItem} onCancel={() => setDialogOpen(false)} onSave={saveManagerItem} />
      </Modal>
    </div>
  );
}

export default Settings;

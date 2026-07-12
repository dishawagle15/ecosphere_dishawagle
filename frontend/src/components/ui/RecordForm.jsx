import { useState } from "react";

function buildInitialForm(fields, item) {
  if (item) return item;
  return Object.fromEntries(fields.map((field) => [field.key, field.defaultValue ?? ""]));
}

function RecordForm({ fields, item, onCancel, onSave }) {
  const [form, setForm] = useState(() => buildInitialForm(fields, item));

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
              onChange={(event) =>
                setForm((current) => ({ ...current, [field.key]: event.target.value }))
              }
              className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none transition focus:border-emerald-300"
              required
            />
          </label>
        ))}
      </div>
      <div className="flex justify-end gap-3 border-t border-slate-100 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default RecordForm;

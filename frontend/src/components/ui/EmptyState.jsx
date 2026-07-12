import { Inbox } from "lucide-react";

function EmptyState({ title = "No records found", description = "Try changing your search or filters." }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-md border border-dashed border-slate-200 p-10 text-center">
      <div className="flex size-12 items-center justify-center rounded-md bg-slate-50 text-slate-400">
        <Inbox size={22} aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-slate-500">{description}</p>
    </div>
  );
}

export default EmptyState;

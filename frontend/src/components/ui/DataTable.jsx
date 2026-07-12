import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import EmptyState from "./EmptyState.jsx";

const pageSize = 6;

function DataTable({
  columns,
  data,
  filters = [],
  searchFields = [],
  searchPlaceholder = "Search records",
  title,
  action,
  emptyTitle,
  emptyDescription,
}) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filteredData = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return data;

    return data.filter((row) =>
      searchFields.some((field) => String(row[field] ?? "").toLowerCase().includes(normalizedQuery)),
    );
  }, [data, query, searchFields]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const visibleRows = filteredData.slice((safePage - 1) * pageSize, safePage * pageSize);

  return (
    <section className="min-w-0 rounded-md border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          {title ? <h2 className="text-base font-semibold text-slate-950">{title}</h2> : null}
          <p className="mt-1 text-sm text-slate-500">{filteredData.length} records</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="flex h-10 min-w-0 items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 text-slate-500 focus-within:border-emerald-300 focus-within:bg-white sm:w-72">
            <Search size={16} aria-hidden="true" />
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder={searchPlaceholder}
              className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              type="search"
            />
          </label>
          {filters.map((filter) => (
            <select
              key={filter.label}
              value={filter.value}
              onChange={(event) => {
                filter.onChange(event.target.value);
                setPage(1);
              }}
              className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 outline-none transition focus:border-emerald-300"
              aria-label={filter.label}
            >
              {filter.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ))}
          {action}
        </div>
      </div>
      <div className="p-5">
        {visibleRows.length ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-100">
              {title ? <caption className="sr-only">{title}</caption> : null}
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      className="whitespace-nowrap px-3 py-3 text-left text-xs font-semibold uppercase tracking-normal text-slate-500"
                    >
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {visibleRows.map((row) => (
                  <tr key={row.id} className="transition hover:bg-slate-50">
                    {columns.map((column) => (
                      <td key={column.key} className="whitespace-nowrap px-3 py-4 text-sm text-slate-600">
                        {column.render ? column.render(row) : row[column.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState title={emptyTitle} description={emptyDescription} />
        )}
      </div>
      <div className="flex items-center justify-between border-t border-slate-100 px-5 py-4 text-sm text-slate-500">
        <span aria-live="polite">
          Page {safePage} of {totalPages}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={safePage === 1}
            onClick={() => setPage((currentPage) => Math.max(1, currentPage - 1))}
            className="rounded-md border border-slate-200 px-3 py-2 font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          <button
            type="button"
            disabled={safePage === totalPages}
            onClick={() => setPage((currentPage) => Math.min(totalPages, currentPage + 1))}
            className="rounded-md border border-slate-200 px-3 py-2 font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default DataTable;

import {
  Bell,
  Leaf,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
} from "lucide-react";

function Navbar({ isSidebarCollapsed, onOpenMobileSidebar, onToggleSidebar }) {
  const DesktopToggleIcon = isSidebarCollapsed ? PanelLeftOpen : PanelLeftClose;

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 lg:hidden"
          onClick={onOpenMobileSidebar}
          aria-label="Open sidebar"
        >
          <Menu size={20} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="hidden size-10 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 lg:flex"
          onClick={onToggleSidebar}
          aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <DesktopToggleIcon size={20} aria-hidden="true" />
        </button>
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-emerald-600 text-white">
            <Leaf size={20} aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-slate-500">
              Enterprise ESG Workspace
            </p>
            <h1 className="truncate text-lg font-semibold text-slate-950">
              EcoSphere
            </h1>
          </div>
        </div>
        <label className="hidden h-10 w-full max-w-sm items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 text-slate-500 transition focus-within:border-emerald-300 focus-within:bg-white md:flex">
          <Search size={17} aria-hidden="true" />
          <input
            type="search"
            placeholder="Search workspace"
            className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </label>
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
          aria-label="Notifications"
        >
          <Bell size={19} aria-hidden="true" />
        </button>
        <div className="hidden rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700 sm:block">
          Live
        </div>
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-md bg-slate-900 text-sm font-semibold text-white transition hover:bg-emerald-700"
          aria-label="User profile"
        >
          DW
        </button>
      </div>
    </header>
  );
}

export default Navbar;

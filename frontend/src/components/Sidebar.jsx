import { NavLink } from "react-router-dom";
import {
  BarChart3,
  ChevronLeft,
  X,
  FileText,
  Gauge,
  Leaf,
  Medal,
  Scale,
  Settings,
  Users,
} from "lucide-react";

const navigationItems = [
  { name: "Dashboard", path: "/", icon: Gauge },
  { name: "Environmental", path: "/environmental", icon: Leaf },
  { name: "Social", path: "/social", icon: Users },
  { name: "Governance", path: "/governance", icon: Scale },
  { name: "Gamification", path: "/gamification", icon: Medal },
  { name: "Reports", path: "/reports", icon: FileText },
  { name: "Settings", path: "/settings", icon: Settings },
];

function Sidebar({ isCollapsed, isMobileOpen, onCloseMobile }) {
  const sidebarContent = (
    <>
      <div
        className={[
          "mb-8 flex items-center gap-3",
          isCollapsed ? "lg:justify-center" : "",
        ].join(" ")}
      >
        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm shadow-emerald-900/10">
          <BarChart3 size={22} aria-hidden="true" />
        </div>
        <div className={isCollapsed ? "lg:hidden" : ""}>
          <p className="text-base font-semibold text-slate-950">EcoSphere AI</p>
          <p className="text-sm text-slate-500">ESG management</p>
        </div>
        <button
          type="button"
          className="ml-auto flex size-9 items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-slate-950 lg:hidden"
          onClick={onCloseMobile}
          aria-label="Close sidebar"
        >
          <X size={19} aria-hidden="true" />
        </button>
      </div>
      <nav className="space-y-1" aria-label="Main navigation">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                [
                  "group flex h-11 items-center gap-3 rounded-md px-3 text-sm font-medium transition",
                  isCollapsed ? "lg:justify-center lg:px-0" : "",
                  isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                ].join(" ")
              }
            >
              <Icon size={18} aria-hidden="true" />
              <span className={isCollapsed ? "lg:hidden" : ""}>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
      <div className={isCollapsed ? "mt-8 hidden lg:block" : "mt-8"}>
        <div
          className={[
            "rounded-md border border-emerald-100 bg-emerald-50 p-4",
            isCollapsed ? "lg:flex lg:justify-center lg:p-3" : "",
          ].join(" ")}
        >
          <div className="flex size-8 items-center justify-center rounded-md bg-white text-emerald-700">
            <ChevronLeft
              size={17}
              aria-hidden="true"
              className={isCollapsed ? "rotate-180" : ""}
            />
          </div>
          <div className={isCollapsed ? "lg:hidden" : "ml-3"}>
            <p className="text-sm font-semibold text-emerald-950">Enterprise ready</p>
            <p className="mt-1 text-xs leading-5 text-emerald-800">
              ESG workspace for reporting, insights, and team progress.
            </p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <aside
        className={[
          "fixed inset-y-0 left-0 z-30 hidden border-r border-slate-200 bg-white px-4 py-6 shadow-sm transition-[width] duration-300 ease-in-out lg:block",
          isCollapsed ? "w-20" : "w-72",
        ].join(" ")}
      >
        {sidebarContent}
      </aside>
      <div
        className={[
          "fixed inset-0 z-40 bg-slate-950/40 transition-opacity lg:hidden",
          isMobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        onClick={onCloseMobile}
        aria-hidden="true"
      />
      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 w-72 border-r border-slate-200 bg-white px-4 py-6 shadow-xl transition-transform duration-300 ease-in-out lg:hidden",
          isMobileOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {sidebarContent}
      </aside>
    </>
  );
}

export default Sidebar;

import { NavLink } from "react-router-dom";
import {
  BarChart3,
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

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-slate-200 bg-white px-5 py-6 lg:block">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-lg bg-emerald-600 text-white">
          <BarChart3 size={22} aria-hidden="true" />
        </div>
        <div>
          <p className="text-base font-semibold">EcoSphere AI</p>
          <p className="text-sm text-slate-500">ESG management</p>
        </div>
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
                  "flex h-11 items-center gap-3 rounded-md px-3 text-sm font-medium transition",
                  isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                ].join(" ")
              }
            >
              <Icon size={18} aria-hidden="true" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;

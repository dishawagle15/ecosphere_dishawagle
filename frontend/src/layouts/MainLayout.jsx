import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";

function MainLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((currentValue) => !currentValue);
  };

  const openMobileSidebar = () => {
    setIsMobileSidebarOpen(true);
  };

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={closeMobileSidebar}
      />
      <div
        className={[
          "min-h-screen transition-[padding] duration-300 ease-in-out",
          isSidebarCollapsed ? "lg:pl-20" : "lg:pl-72",
        ].join(" ")}
      >
        <Navbar
          isSidebarCollapsed={isSidebarCollapsed}
          onOpenMobileSidebar={openMobileSidebar}
          onToggleSidebar={toggleSidebar}
        />
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;

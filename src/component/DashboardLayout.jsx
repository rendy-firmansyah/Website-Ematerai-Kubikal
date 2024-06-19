import { useState } from "react";
import Sidebar from "../component/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <button
        aria-controls="sidebar"
        onClick={(e) => {
          e.stopPropagation();
          setSidebarOpen(!sidebarOpen);
        }}
        className="z-[99999] block rounded-sm border border-stroke bg-white p-1.5 shadow-sm lg:hidden">
        open
      </button>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

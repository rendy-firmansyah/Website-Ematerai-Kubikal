import { useState } from "react";
import Sidebar from "./Dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./Dashboard/Header";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen overflow-hidden bg-[#f4f5f7]">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="w-full">
        <DashboardHeader
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
        />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

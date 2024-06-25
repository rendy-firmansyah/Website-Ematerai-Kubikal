const DashboardHeader = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <div className="bg-white flex w-full justify-between lg:justify-end p-4 border shadow-sm">
      <button
        aria-controls="sidebar"
        onClick={(e) => {
          e.stopPropagation();
          setSidebarOpen(!sidebarOpen);
        }}
        className="block rounded-sm border border-stroke bg-white p-1.5 shadow-sm lg:hidden">
        open
      </button>
      <div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-blue-500"></div>
          <span>User</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;

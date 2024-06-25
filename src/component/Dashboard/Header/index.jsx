import { RxHamburgerMenu } from "react-icons/rx";

const DashboardHeader = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <div className="bg-white flex w-full justify-between lg:justify-end p-4 border shadow-sm">
      <button
        aria-controls="sidebar"
        onClick={(e) => {
          e.stopPropagation();
          setSidebarOpen(!sidebarOpen);
        }}
        className="block lg:hidden">
        <RxHamburgerMenu className="w-6 h-6" />
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

import React from "react";
import SideBar from "./_components/SideBar";
import DashboardHeader from "./_components/DashboardHeader";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="md:w-64 hidden md:block fixed">
        <SideBar />
      </div>

      <div className="md:ml-64 h-screen">
        <DashboardHeader />
        <div className="p-6 bg-gray-100 dark:bg-gray-900">{children}</div>
        <div className="h-4 w-full bg-white dark:bg-black sticky bottom-0 z-10 py-1 justify-center items-center flex">
          <h2 className="text-[12px] cursor-default">
            Bu tasarım{" "}
            <span className="font-bold text-red-700 dark:text-primary">
              Kovancılar Yazılım
            </span>{" "}
            tarafından geliştirilmiştir.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

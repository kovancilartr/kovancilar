"use client";
import React from "react";
import SideBar from "./_components/SideBar";
import DashboardHeader from "./_components/DashboardHeader";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const params = usePathname().includes("lesson");
  return (
    <div>
      {!params ? (
        <>
          <div className="md:w-64 hidden md:block fixed">
            <SideBar />
          </div>

          <div className="md:ml-64 h-screen">
            <DashboardHeader />
            <div className="p-6 bg-gray-100 dark:bg-gray-900">{children}</div>
          </div>
        </>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default DashboardLayout;

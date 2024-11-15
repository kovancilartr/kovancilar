import React from "react";
import CustomUserButton from "./CustomUserButton";

const DashboardHeader = () => {
  return (
    <div
      className="p-5 shadow-md dark:shadow-sm dark:shadow-slate-700 flex justify-end h-20 sticky top-0 z-50 
    bg-[rgb(255,255,255,0.4)] dark:bg-[rgb(0,0,0,0.4)] inset-x-0 backdrop-blur-md backdrop-saturate-150 w-full items-center "
    >
      <CustomUserButton />
    </div>
  );
};

export default DashboardHeader;

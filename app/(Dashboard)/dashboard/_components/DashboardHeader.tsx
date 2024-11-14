import { UserButton } from "@clerk/nextjs";
import React from "react";

const DashboardHeader = () => {
  return (
    <div className="p-5 shadow-md dark:shadow-sm dark:shadow-slate-700 flex justify-end h-16">
      <UserButton />
    </div>
  );
};

export default DashboardHeader;

import DashboardHeader from "@/app/(Dashboard)/_components/DashboardHeader";
import React from "react";

export default function LessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboardHeader />
      <div>{children}</div>
    </>
  );
}

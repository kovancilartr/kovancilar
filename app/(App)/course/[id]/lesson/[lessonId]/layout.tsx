"use client";
import React from "react";
import LessonSideBar from "./_components/LessonSideBar";
import LessonHeader from "./_components/LessonHeader";

export default function LessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="md:w-64 hidden md:block fixed">
        <LessonSideBar />
      </div>

      <div className="md:ml-64 h-screen">
        <LessonHeader />
        <div className="p-6 bg-gray-100 dark:bg-gray-900 h-full">
          {children}
        </div>
      </div>
    </div>
  );
}

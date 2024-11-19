"use client";
import CustomUserButton from "@/app/(App)/_components/CustomUserButton";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const LessonHeader = () => {
  const { id } = useParams();
  return (
    <div
      className="p-5 shadow-md dark:shadow-sm dark:shadow-slate-700 flex justify-end h-16 sticky top-0 z-50 
    bg-[rgb(255,255,255,0.4)] dark:bg-[rgb(0,0,0,0.4)] inset-x-0 backdrop-blur-md backdrop-saturate-150 w-full items-center "
    >
      {/* KURSA GERİ DÖN BUTON KISMI */}
      <div>
        <Link href={`/course/${id}`}>
          <Button variant="outline" className="mr-2">
            <ArrowLeft className="text-black dark:text-white" />
            Kursa Geri Dön
          </Button>
        </Link>
      </div>
      {/* KULLANICI PROFİL KISMI */}
      <div className="flex flex-row gap-2 items-center justify-center">
        <ModeToggle variant="ghost" />
        <CustomUserButton type="default" />
      </div>
    </div>
  );
};

export default LessonHeader;

"use client";
import React from "react";
import AppLogo from "./AppLogo";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Shield, UserCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

const SideBar = () => {
  const menuList = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/upgrade",
    },
    {
      name: "Profile",
      icon: UserCircle,
      path: "/dashboard/profile",
    },
  ];
  const path = usePathname();
  return (
    <div className="h-screen shadow-md dark:shadow-sm dark:shadow-slate-700 p-4">
      <div className="flex items-center gap-2">
        <ModeToggle />
        <AppLogo />
      </div>
      <div className="mt-6 space-y-16">
        <Button className="w-full">+ Yeni Oluştur</Button>
        <div>
          {menuList.map((item, key) => (
            <div
              key={key}
              className={`flex gap-4 items-center p-3 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-md cursor-pointer mt-2 ${
                path == item.path && "bg-slate-200 dark:bg-slate-800"
              }`}
            >
              <item.icon className="w-6 h-6" />
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="border p-3 bg-slate-100  dark:bg-slate-700 rounded-lg absolute bottom-6 w-[87%]">
        <h2 className="text-xl mb-2">Mevcut Krediler : 4</h2>
        <Progress value={40} />
        <h2 className="text-sm">1 Out of 5 Credits Used</h2>

        <Link href={"/dashboard/upgrade"} className="text-primary text-sm mt-3">
          Upgrade Credits
        </Link>
      </div>
    </div>
  );
};

export default SideBar;

// global css tanımlanıcak bg-slate-100 dark:bg-slate-700 ve bg-slate-200 dark:bg-slate-800

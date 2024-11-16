"use client";
import React from "react";
import AppLogo from "./AppLogo";
import { ModeToggle } from "@/components/ModeToggle";
import { LayoutDashboard, Shield, UserCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAuthContext } from "@/app/AuthProvider";
import MoreMenu from "./MoreMenu";

const SideBar = () => {
  const path = usePathname();
  const { currentUser, loading } = useAuthContext();

  const menuList = [
    {
      name: "Ana Sayfa",
      icon: LayoutDashboard,
      path: "/",
    },
    {
      name: "Hakkımda",
      icon: Shield,
      path: "/about",
    },
    ...(currentUser
      ? [
          {
            name: "Profil",
            icon: UserCircle,
            path: "/auth/profile",
          },
        ]
      : []),
  ];
  return (
    <div className="h-screen shadow-md dark:shadow-sm dark:shadow-slate-700 p-4">
      <div className="flex items-center gap-2">
        <ModeToggle />
        <AppLogo />
      </div>
      <div className="mt-6">
        {/* <Button className="w-full dark:text-black">+ Yeni Oluştur</Button> */}
        <hr className="dark:border-slate-700" />
        <div className="mt-0">
          {!loading &&
            menuList.map((item, key) => (
              <Link
                key={key}
                href={item.path}
                className={`flex gap-4 items-center p-3 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-md cursor-pointer mt-2 ${
                  path == item.path && "bg-slate-200 dark:bg-slate-800"
                }`}
              >
                <item.icon className="w-6 h-6" />
                <h2>{item.name}</h2>
              </Link>
            ))}
        </div>
      </div>

      <div className="border-t absolute left-0 -bottom-2 w-full">
        <div className="flex flex-row px-4 pt-2 pb-4">
          <h2 className="text-[12px] cursor-default">
            Bu tasarım{" "}
            <span className="font-bold text-red-700 dark:text-primary">
              Kovancılar Yazılım
            </span>{" "}
            tarafından geliştirilmiştir.
          </h2>
          <MoreMenu />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

// global css tanımlanıcak bg-slate-100 dark:bg-slate-700 ve bg-slate-200 dark:bg-slate-800

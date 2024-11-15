"use client";
import React from "react";
import AppLogo from "./AppLogo";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Shield, UserCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { useAuthContext } from "@/app/AuthProvider";

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
    {
      name: currentUser ? "Profil" : "Giriş Yap", // currentUser varsa "Profil", yoksa "Giriş Yap"
      icon: UserCircle,
      path: currentUser ? "/auth/profile" : "/auth/login", // currentUser varsa "/auth/profile", yoksa "/auth/login"
    },
  ];
  return (
    <div className="h-screen shadow-md dark:shadow-sm dark:shadow-slate-700 p-4">
      <div className="flex items-center gap-2">
        <ModeToggle />
        <AppLogo />
      </div>
      <div className="mt-6 space-y-16">
        <Button className="w-full dark:text-black">+ Yeni Oluştur</Button>
        <div>
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

      <div className="border p-3 bg-slate-100  dark:bg-slate-700 rounded-lg absolute bottom-6 w-[87%]">
        <h2 className="text-xl mb-2">Lorem ipsum dolor</h2>
        <Progress value={40} />
        <h2 className="text-sm">Lorem ipsum dolor sit amet.</h2>

        <Link href={"/dashboard/upgrade"} className="text-primary text-sm mt-3">
          Lorem.Ipsum
        </Link>
      </div>
    </div>
  );
};

export default SideBar;

// global css tanımlanıcak bg-slate-100 dark:bg-slate-700 ve bg-slate-200 dark:bg-slate-800

"use client";
import React, { useEffect, useState } from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import Link from "next/link";
import Image from "next/image";
import { Calendar, SquarePower, User2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Course } from "../(Server)/types/Course";
import { fetchAllCoursesData } from "../(Server)/actions/courses";

const Dashboard = () => {
  const [coursesData, setCoursesData] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetchAllCoursesData();
      setCoursesData(await response);
    };
    fetchCourses();
  }, []);

  console.log("coursesData", coursesData);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="col-span-3">
          <WelcomeBanner />
          <div className="bg-white rounded-lg p-4 mt-4 border">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-black">Oynatma Listesi</h1>

              {/* ARAMA BÖLÜMÜ */}
              <Input
                className="w-1/4 dark:text-black focus-visible:ring-0 
                dark:border-gray-300 dark:placeholder:text-black"
                placeholder="Arama..."
              />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-4 text-black">
              {coursesData.map((item, index) => (
                <Link key={index} href={`/course-preview/${item.id}`}>
                  <div
                    className="border dark:border-gray-300 rounded-md hover:shadow-md hover:shadow-purple-300 
                  cursor-pointer h-fit pb-4 hover:scale-105 transition-all duration-500"
                  >
                    {item.previewImage && (
                      <Image
                        src={item.previewImage}
                        alt=""
                        width={500}
                        height={170}
                        className="rounded-t-md h-[160px] object-cover"
                      />
                    )}
                    {/* item.previewImage null ise burası render edilecek */}
                    {!item.previewImage && <p>Görüntü yüklenemiyor.</p>}
                    <div className="flex flex-col gap-1 p-2">
                      <h2 className="font-medium">{item.name}</h2>
                      <p className="text-[12px] text-gray-400 overflow-hidden whitespace-nowrap overflow-ellipsis">
                        {item.description}
                      </p>
                      <div className="flex gap-2 justify-between">
                        <div className="flex gap-2">
                          <SquarePower className="w-5 h-5" />
                          <h2 className="text-[14px] text-gray-400">
                            {item.supervisorId}
                          </h2>
                          <User2 className="w-5 h-5" />
                          <h2 className="text-[14px] text-gray-400">
                            {item.students.length}
                          </h2>
                        </div>
                        <div className="flex gap-2">
                          <Calendar className="w-5 h-5" />
                          <h2 className="text-[14px] text-gray-400">
                            {item.createdAt.toString().slice(0, 10)}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="text-black space-y-4">
          <div className="p-3 bg-white h-36 rounded-xl shadow-md border border-gray-100 flex flex-col items-center justify-center">
            Alan 1
          </div>
          <div className="p-3 bg-white h-36 rounded-xl shadow-md border border-gray-100 flex flex-col items-center justify-center">
            Alan 2
          </div>
          <div className="p-3 bg-white h-36 rounded-xl shadow-md border border-gray-100 flex flex-col items-center justify-center">
            Alan 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { VideoPlayer } from "@/components/VideoPlayer";
import { useCoursesStore } from "@/store/courseStore";
import Loading from "../../../loading";
import { CircleCheck, CirclePlay } from "lucide-react";

export default function CoursePage() {
  const params = useParams();
  const { course, setCourse, isLoading, error } = useCoursesStore();

  useEffect(() => {
    const fetchCourseData = async () => {
      await setCourse(params?.id as string);
    };
    fetchCourseData();
  }, [params, setCourse]);
  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <p>Hata: {error}</p>;
  }

  console.log("AAAcourse", course?.lessons);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-black h-[calc(100vh-130px)]">
      {/* CONTENT SOL BÖLÜM */}
      <div className="col-span-2 bg-white p-3 rounded-sm shadow-sm h-fit">
        <div>
          <h2 className="text-[20px] font-semibold">{course?.name}</h2>
          <Badge variant="default" className="cursor-default">
            {course?.supervisor?.name} {course?.supervisor?.surname}
          </Badge>
          {/* VİDEO GELİCEK */}
          <div className="flex justify-center items-center">
            <VideoPlayer url={course?.previewVideo || ""} />
          </div>

          <h2 className="mt-5 text-[17px] font-semibold">
            <span>{course?.name?.toUpperCase()}</span>
          </h2>
          <div className="text-[13px] font-light mt-2 leading-7">
            <p>{course?.description}</p>
          </div>
        </div>
      </div>
      {/* CONTENT SAĞ BÖLÜM */}
      <div>
        <div className="p-3 text-center rounded-sm bg-primary mb-3">
          <h2 className="text-[22px] font-bold">Enroll to the Course</h2>
          <div className="flex flex-col gap-3 mt-3">
            <h2 className="font-light">
              Enroll Now to Start Learning and Building the project
            </h2>
            <a href="/sign-in">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm 
              font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 
              focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
              h-10 px-4 py-2 bg-white text-black hover:bg-primary-one hover:text-white"
              >
                Enroll Now
              </button>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 border rounded-lg flex flex-col items-center w-full cursor-pointer bg-white mb-3">
            <Image src="/g1.png" alt="" width={30} height={30} />
            <h2 className="text-[14px] texr-gray-500">Source Code</h2>
          </div>
          <div className="p-2 border rounded-lg flex flex-col items-center w-full cursor-pointer bg-white mb-3">
            <Image src="/g2.png" alt="" width={30} height={30} />
            <h2 className="text-[14px] texr-gray-500">App Demo</h2>
          </div>
          <div className="p-2 border rounded-lg flex flex-col items-center w-full cursor-pointer bg-white mb-3">
            <Image src="/g3.png" alt="" width={30} height={30} />
            <h2 className="text-[14px] texr-gray-500">Youtube</h2>
          </div>
        </div>
        <div className="p-3 bg-white rounded-sm">
          <h2 className="text-xl text-center">İçerikler</h2>
          {course?.lessons?.map((item, index) => (
            <Link href={`/course/${course.id}/lesson/${item.id}`} key={index}>
              <h2
                className={`p-2 text-[14px] flex justify-between items-center m-2 border rounded-sm px-4 cursor-pointer  ${
                  item.lessonCompletion
                    ? "bg-green-700 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {index + 1}.{" "}
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                {item.lessonCompletion ? (
                  <CircleCheck className="text-white" width={20} height={20} />
                ) : (
                  <CirclePlay className="text-black" width={20} height={20} />
                )}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

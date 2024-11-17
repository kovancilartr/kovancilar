"use client";
import { fetchCourseData } from "@/app/(Server)/actions/courses";
import { Course, Lesson } from "@/app/(Server)/types/Course";
import { VideoPlayer } from "@/components/VideoPlayer";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function LessonId() {
  // Fonksiyon adı büyük harfle başlatıldı
  const { id, lessonId } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [course, setCourse] = useState<Course>({} as Course);
  const [lesson, setLesson] = useState<Lesson>({} as Lesson);

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetchCourseData(id as string, lessonId as string);
      setCourse(response);
      setLesson(response.lessons[0]);
    };
    fetchCourse();
  }, [id, lessonId]);

  return (
    <>
      <div className="flex flex-col w-full gap-3 text-black h-full">
        <div className="w-full bg-white p-3 rounded-sm shadow-sm h-full">
          <h2 className="text-2xl text-center">{lesson?.name}</h2>
          <div className="flex justify-center items-center">
            <VideoPlayer url={lesson?.videoUrl} />
          </div>
        </div>
        <div className="w-full bg-white p-3 rounded-sm shadow-sm h-fit">
          <div className="flex flex-row justify-center items-center gap-3">
            <div className="p-2 border rounded-lg flex flex-col items-center w-48 cursor-pointer bg-white hover:bg-slate-100 mb-3 transition-all duration-300">
              <Image src="/g1.png" alt="" width={30} height={30} />
              <h2 className="text-[14px] text-gray-500">Source Code</h2>
            </div>
            <div className="p-2 border rounded-lg flex flex-col items-center w-48 cursor-pointer bg-white hover:bg-slate-100 mb-3 transition-all duration-300">
              <Image src="/g2.png" alt="" width={30} height={30} />
              <h2 className="text-[14px] text-gray-500">App Demo</h2>
            </div>
            <div className="p-2 border rounded-lg flex flex-col items-center w-48 cursor-pointer bg-white hover:bg-slate-100 mb-3 transition-all duration-300">
              <Image src="/g3.png" alt="" width={30} height={30} />
              <h2 className="text-[14px] text-gray-500">Youtube</h2>
            </div>
          </div>
          <div className="p-3 text-center">
            <p>{lesson?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

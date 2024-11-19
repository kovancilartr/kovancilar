"use client";
import { VideoPlayer } from "@/components/VideoPlayer";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import LessonContent from "./_components/LessonContent";
import { useCoursesStore } from "@/store/courseStore";
import Loading from "@/app/loading";

export default function LessonId() {
  const { id, lessonId } = useParams();
  const { course, lesson, setLesson, isLoading, error } = useCoursesStore();

  useEffect(() => {
    const fetchCourseData = async () => {
      await setLesson(id as string, lessonId as string);
    };
    fetchCourseData();
  }, [id, lessonId, setLesson]);
  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <p>Hata: {error}</p>;
  }
  console.log("lesson XXXX", lesson);
  console.log("course XXXX", course);
  return (
    <>
      <div className="flex flex-col w-full gap-3 text-black h-full">
        <div className="w-full bg-white p-3 rounded-sm shadow-sm h-full">
          <h2 className="text-2xl text-center">{lesson?.name}</h2>
          <div className="flex justify-center items-center">
            <VideoPlayer url={lesson?.videoUrl || ""} />
          </div>
        </div>
        <div className="w-full bg-white p-3 rounded-sm shadow-sm h-fit">
          <LessonContent lessonId={lessonId as string} />
        </div>
      </div>
    </>
  );
}

"use client";
import Loading from "@/app/loading";
import { useCoursesStore } from "@/store/courseStore";
import { CircleCheck, CirclePlay } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect } from "react";

const LessonSideBar = () => {
  const pathname = usePathname();
  const params = useParams();
  // const courseLesson = useCoursesStore((state) => state.course?.lessons);

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

  console.log("lesson", course);
  return (
    <div className="flex flex-col h-screen shadow-md dark:shadow-sm dark:shadow-slate-700">
      <div className="h-32 border-b"> {/* Kurs İlerlemesi */} </div>
      <div className="flex flex-col">
        {course?.lessons?.map((lesson, index) => (
          <Link
            href={`/course/${params.id}/lesson/${lesson.id}`}
            key={index}
            className={`border-b border-gray-50 py-2 px-4 w-full flex flex-row gap-2 items-center hover:bg-slate-100 ${
              pathname.includes(lesson.id.toString()) && "bg-slate-100"
            }`}
          >
            {lesson.lessonCompletion ? (
              <CircleCheck className="text-green-500" width={20} height={20} />
            ) : (
              <CirclePlay className="text-gray-400" width={20} height={20} />
            )}
            <h2 className="text-md font-semibold">{lesson.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LessonSideBar;

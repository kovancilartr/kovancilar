"use client";

import { useCoursesStore } from "@/store/courseStore";
import { Button } from "@/components/ui/button";
import { Check, CheckSquare } from "lucide-react";

interface LessonContentProps {
  lessonId: string;
}

const LessonContent = ({ lessonId }: LessonContentProps) => {
  const { course, updateLessonCompletion } = useCoursesStore();
  const lesson = course?.lessons.find((lesson) => lesson.id === lessonId);
  if (!lesson) {
    return <p>Ders bulunamadı!</p>;
  }

  const handleLessonCompletion = async () => {
    await updateLessonCompletion(lesson.id, lesson.lessonCompletion);
  };

  return (
    <div className="flex flex-row justify-between items-center gap-8">
      <div className="w-full border-r p-6">
        <h2 className="text-2xl text-center">Ders Özeti</h2>
        {lesson.description}
      </div>
      <div className="w-fit">
        {!lesson.lessonCompletion ? (
          <Button
            className="p-6 gap-2 border rounded-lg flex flex-row items-center w-fit bg-white hover:bg-slate-100 transition-all duration-300"
            onClick={handleLessonCompletion}
          >
            <Check size={44} color="#669c35" />
            <span>Dersi Tamamladım olarak işaretle</span>
          </Button>
        ) : (
          <Button
            className="p-6 gap-2 border rounded-lg flex flex-row items-center w-fit bg-white hover:bg-slate-100 transition-all duration-300"
            onClick={handleLessonCompletion}
          >
            <CheckSquare className="text-red-500" />
            <span>Henüz Ders Tamamlanmadım olarak işaretle</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default LessonContent;

import { create } from "zustand";
import {
  fetchAllCoursesActions,
  fetchCourseActions,
} from "@/app/actions/courseActions";
import {
  fetchLessonActions,
  updateLessonActions,
} from "@/app/actions/lessonActions";
import { Course, CourseStore } from "@/types/index";

export const useCoursesStore = create<CourseStore>()((set, get) => ({
  courses: [],
  course: null,
  lesson: null,
  isLoading: false,
  error: null,

  // Tüm kursları al
  setCourses: async () => {
    set({ isLoading: true, error: null });
    try {
      const courses = await fetchAllCoursesActions();
      set({ courses, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  // Tek kursu al
  setCourse: async (courseId: string) => {
    set({ isLoading: true, error: null });
    try {
      const course = await fetchCourseActions(courseId);
      set({ course, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  // setLesson ile Kurs'u Alıyoruz
  setLesson: async (courseId: string, lessonId: string) => {
    set({ isLoading: true, error: null, course: null });
    try {
      const response = await fetchLessonActions(courseId, lessonId);
      set({ lesson: response, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
      console.error("Kursa ait dersleri çekerken hata:", error);
    }
  },

  // Ders tamamlanma durumunu güncelle
  updateLessonCompletion: async (
    lessonId: string,
    lessonCompletion: boolean
  ) => {
    try {
      // Prisma ile ders durumunu güncelle
      const updatedLesson = await updateLessonActions(
        lessonId,
        lessonCompletion
      );

      // Store'daki course içindeki dersi güncelle
      const currentCourse = get().course;
      if (currentCourse) {
        const updatedLessons = currentCourse.lessons.map((lesson) =>
          lesson.id === lessonId ? { ...lesson, ...updatedLesson } : lesson
        );

        set({ course: { ...currentCourse, lessons: updatedLessons } });
      }
    } catch (error) {
      console.error("Ders güncellenirken hata:", error);
      set({ error: (error as Error).message });
    }
  },

  // BURASI HENÜZ İŞLEVSİZ KULLANMIYORUZ DAHA SONRA EL ATILACAK
  updateCourse: (id: string, updatedCourse: Partial<Course>) => {
    const courses = get().courses;
    const index = courses.findIndex((course) => course.id === parseInt(id));
    if (index !== -1) {
      set({
        courses: [
          ...courses.slice(0, index),
          { ...courses[index], ...updatedCourse },
          ...courses.slice(index + 1),
        ],
      });
    }
  },
}));

import { Courses, Day, Lessons, Student, Teacher } from "@prisma/client";

export interface CourseStore {
  courses: Course[];
  course: Course | null;
  lesson: Lesson | null;
  isLoading: boolean;
  error: string | null;
  setCourses: () => Promise<void>;
  setCourse: (courseId: string) => Promise<void>;
  setLesson: (courseId: string, lessonId: string) => Promise<void>;
  updateLessonCompletion: (
    lessonId: string,
    lessonCompletion: boolean
  ) => Promise<void>;
  updateCourse: (id: string, updatedCourse: Partial<Course>) => void;
}

export interface Course {
  id: number;
  name: string;
  description: string;
  previewImage: string | null;
  previewVideo: string | null;
  courseUrl: string | null;
  supervisorId: string | null;
  supervisor: Teacher | null;
  lessons: Lessons[];
  students: Student[];
  startTime: Date;
  endTime: Date;
  createdAt: Date;
}
export interface Lesson {
  id: number;
  name: string;
  description: string;
  previewImage: string;
  videoUrl: string;
  lessonCompletion: boolean;
  pdfUrl: string | null;
  day: Day;
  startTime: Date;
  endTime: Date;
  Courses: Courses[];
}

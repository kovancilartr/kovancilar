import { Lessons } from "@prisma/client";

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
  id: number; // Prisma'daki id artık `Int`
  name: string;
  description: string;
  previewImage: string | null;
  previewVideo: string | null;
  courseUrl: string | null;
  supervisorId: string | null; // supervisorId, string olabilir çünkü `Teacher` modelinde id tipi string.
  supervisor: Teacher | null; // Supervisor, bir `Teacher` olabilir veya null olabilir.
  lessons: Lessons[]; // Lessons bir dizi olmalı, çünkü bir kurs birden fazla derse sahip olabilir.
  students: Student[]; // Öğrenciler de bir dizi olmalı, çünkü bir kurs birden fazla öğrenciye sahip olabilir.
  startTime: Date;
  endTime: Date;
  createdAt: Date;
}
export interface Lesson {
  id: string; // `id` tipi artık `String`, çünkü Prisma'da `Lessons` modelinde `id` tipi `String`
  name: string;
  description: string;
  previewImage: string;
  videoUrl: string;
  pdfUrl: string | null;
  day: Day;
  startTime: Date;
  endTime: Date;
  Courses: Course[]; // `Courses`, birden fazla `Course` içerebileceği için dizi olmalı
}
export interface Teacher {
  id: string; // Teacher `id` tipi string
  email: string | null;
  username: string;
  phone: string | null;
  name: string;
  surname: string;
  address: string;
  img: string | null;
  sex: UserSex;
  birthday: Date;
  createdAt: Date;
  Courses: Course[]; // Öğretmen birden fazla kursa sahip olabilir
}
export interface Student {
  id: string; // Student `id` tipi string
  email: string | null;
  username: string;
  phone: string | null;
  name: string;
  surname: string;
  address: string;
  img: string | null;
  sex: UserSex;
  birthday: Date;
  createdAt: Date;
  studentLessons: StudentLesson[]; // Öğrenci, derslerin tamamlanma durumlarını içeren `StudentLessons` ilişkisine sahip
  Courses: Course[]; // Öğrenci birden fazla kursa sahip olabilir
}
export interface StudentLesson {
  id: number; // Prisma'da `StudentLessons` modelindeki `id` tipi `Int`
  studentId: string; // Öğrencinin `id`'si
  lessonId: string; // Dersin `id`'si
  lessonCompletion: boolean | null; // Dersin tamamlanma durumu
  lesson: Lesson; // İlgili ders
  student: Student; // İlgili öğrenci
}
export enum UserSex {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum Day {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
}

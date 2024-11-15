import { Lessons, Student, Teacher } from "@prisma/client";

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

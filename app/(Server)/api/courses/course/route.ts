"use server";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get("courseId");
  const lessonId = searchParams.get("lessonId");

  // courseId zorunlu
  if (!courseId) {
    return NextResponse.json(
      { error: "courseId is required" },
      { status: 400 }
    );
  }

  try {
    // Eğer sadece courseId varsa, o kursu ve ilişkili dersleri getir
    if (lessonId) {
      // Eğer lessonId de varsa, courseId içindeki o dersi getirmek için filtreleme yap
      const courseWithLesson = await prisma.courses.findUnique({
        where: {
          id: parseInt(courseId),
        },
        include: {
          lessons: {
            where: {
              id: lessonId, // sadece bu lessonId'yi getir
            },
          },
        },
      });

      // Eğer lessonId ile eşleşen ders bulunmazsa
      if (!courseWithLesson || courseWithLesson.lessons.length === 0) {
        return NextResponse.json(
          { error: "Lesson not found in the specified course" },
          { status: 404 }
        );
      }

      return NextResponse.json(courseWithLesson);
    }

    // Eğer sadece courseId varsa, o kursu ve tüm dersleri getir
    const course = await prisma.courses.findUnique({
      where: {
        id: parseInt(courseId),
      },
      include: {
        students: true,
        lessons: true, // tüm dersleri getir
        supervisor: true,
      },
    });

    // Kurs bulunamazsa hata döndür
    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json(course);
  } catch (error) {
    console.error("Error fetching course data:", error);
    return NextResponse.json(
      { error: "Failed to fetch course data" },
      { status: 500 }
    );
  }
}

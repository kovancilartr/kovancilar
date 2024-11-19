"use server";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get("courseId");
  const lessonId = searchParams.get("lessonId");

  try {
    if (courseId && lessonId) {
      const lesson = await prisma.lessons.findUnique({
        where: {
          id: lessonId,
        },
      });
      return NextResponse.json(lesson);
    }
  } catch (error) {
    console.error("Error fetching course data:", error);
    return NextResponse.json(
      { error: "Failed to fetch course data" },
      { status: 500 }
    );
  }
}

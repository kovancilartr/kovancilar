"use server";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get("courseId");

  try {
    if (courseId) {
      const course = await prisma.courses.findUnique({
        where: {
          id: parseInt(courseId),
        },
        include: {
          students: true,
          lessons: true,
          supervisor: true,
        },
      });
      if (!course) {
        return NextResponse.json(
          { error: "Course not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(course);
    }
  } catch (error) {
    console.error("Error fetching course data:", error);
    return NextResponse.json(
      { error: "Failed to fetch course data" },
      { status: 500 }
    );
  }
}

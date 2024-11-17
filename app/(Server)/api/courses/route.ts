"use server";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const courses = await prisma.courses.findMany({
      include: {
        students: {
          select: {
            name: true,
            img: true,
            surname: true,
          },
        },
        lessons: {
          select: {
            name: true,
            pdfUrl: true,
            videoUrl: true,
          },
        },
      },
      orderBy: {
        startTime: "asc",
      },
      cacheStrategy: {
        ttl: 60,
        swr: 30,
      },
      take: 10,
    });
    // console.log("courses", courses);
    return NextResponse.json(courses);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
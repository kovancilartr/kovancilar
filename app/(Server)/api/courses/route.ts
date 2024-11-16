"use server";
import prisma from "@/lib/prisma";
// import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// const prisma = new PrismaClient();

export async function GET() {
  try {
    const courses = await prisma.courses.findMany({
      include: {
        students: true,
        lessons: true,
      },
      orderBy: {
        startTime: "asc",
      },
      cacheStrategy: {
        ttl: 60,
        swr: 30,
      },
    });
    console.log("courses", courses);
    return NextResponse.json(courses);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

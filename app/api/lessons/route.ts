"use server";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const lesson = await prisma.lessons.findMany();
    return NextResponse.json(lesson);
  } catch (error) {
    console.error("Error fetching course data:", error);
    return NextResponse.json(
      { error: "Failed to fetch course data" },
      { status: 500 }
    );
  }
}

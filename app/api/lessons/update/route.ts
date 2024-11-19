import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { lessonId, lessonCompletion } = body;

    // Gelen verilerin doğruluğunu kontrol et
    if (!lessonId || typeof lessonCompletion !== "boolean") {
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 400 }
      );
    }

    // Prisma kullanarak dersi güncelle
    const updatedLesson = await prisma.lessons.update({
      where: { id: lessonId },
      data: { lessonCompletion: !lessonCompletion },
    });

    return NextResponse.json(updatedLesson, { status: 200 });
  } catch (error) {
    console.error("Error updating lesson:", error);
    return NextResponse.json(
      { error: "An error occurred while updating the lesson." },
      { status: 500 }
    );
  }
}
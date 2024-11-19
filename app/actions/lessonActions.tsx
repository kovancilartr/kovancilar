// Tek dersi getir+
export const fetchLessonActions = async (
  courseId: string,
  lessonId: string
) => {
  const response = await fetch(
    `/api/lessons/lesson?courseId=${courseId}&lessonId=${lessonId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch lesson data");
  }
  return await response.json();
};

// Ders tamamlanma durumunu güncelle+
export const updateLessonActions = async (
  lessonId: string,
  lessonCompletion: boolean
) => {
  try {
    const response = await fetch("/api/lessons/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lessonId, lessonCompletion }),
    });

    if (!response.ok) {
      throw new Error(`Failed to update lesson: ${response.statusText}`);
    }

    const updatedLesson = await response.json();
    return updatedLesson;
  } catch (error) {
    console.error("Error in updateLessonActions:", error);
    throw error;
  }
};

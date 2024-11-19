// Tüm kursları getir+
export const fetchAllCoursesActions = async () => {
  const response = await fetch("/api/courses");
  if (!response.ok) {
    throw new Error("Failed to fetch courses data");
  }
  return await response.json();
};

// Tek kursu getir+
export const fetchCourseActions = async (courseId: string) => {
  const response = await fetch(`/api/courses/course?courseId=${courseId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch course data");
  }
  return await response.json();
};

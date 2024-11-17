export const fetchAllCoursesData = async () => {
  const response = await fetch("/api/courses");
  if (!response.ok) {
    throw new Error("Failed to fetch hero data XXXXXXXXX");
  }
  const data = await response.json();
  //   console.log("data", data);
  return data;
};

export const fetchCourseData = async (courseId: string, lessonId?: string) => {
  let url = `/api/courses/course?courseId=${courseId}`;

  // Eğer lessonId varsa, onu da URL'ye ekle
  if (lessonId) {
    url += `&lessonId=${lessonId}`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch course data");
  }

  const data = await response.json();
  console.log("data", data);
  return data;
};

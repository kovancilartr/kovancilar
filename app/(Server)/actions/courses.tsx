export const fetchAllCoursesData = async () => {
  const response = await fetch("/api/courses");
  if (!response.ok) {
    throw new Error("Failed to fetch hero data XXXXXXXXX");
  }
  const data = await response.json();
//   console.log("data", data);
  return data;
};

import { redirect } from "next/navigation";

// Course sayfasına gelen kullanıcı otomatik ilk kursa yönlendirilecek

export default async function Course() {
  const firstCourseId = 1;

  redirect(`/course/${firstCourseId}`);
}

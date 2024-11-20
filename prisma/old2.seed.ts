import { Day, PrismaClient, UserSex } from "@prisma/client";
import { loremIpsum } from "lorem-ipsum";

const prisma = new PrismaClient();

async function main() {
  // ADMIN
  for (let i = 1; i <= 3; i++) {
    await prisma.admin.create({
      data: {
        id: `admin${i}`,
        username: `admin${i}`,
      },
    });
  }

  // COURSE
  for (let i = 1; i <= 10; i++) {
    await prisma.courses.create({
      data: {
        name: loremIpsum({ count: 1, units: "words" }),
        description: loremIpsum({ count: 2, units: "paragraphs" }),
        previewImage: `https://picsum.photos/200/300?random=${i}`,
        previewVideo: `https://picsum.photos/200/300?random=${i}`,
        courseUrl: `https://picsum.photos/200/300?random=${i}`,
        startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
        endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
      },
    });
  }

  // TEACHER
  for (let i = 1; i <= 15; i++) {
    await prisma.teacher.create({
      data: {
        id: `teacher${i}`,
        email: `${loremIpsum({ count: 1, units: "words" })}${i}@example.com`,
        username: `${loremIpsum({ count: 1, units: "words" })}${i}`,
        phone: `123-456-789${i}`,
        name: loremIpsum({ count: 1, units: "words" }),
        surname: loremIpsum({ count: 1, units: "words" }),
        address: loremIpsum({ count: 5, units: "words" }),
        img: `https://picsum.photos/200/300?random=${i}`,
        sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
        birthday: new Date(
          new Date().setFullYear(new Date().getFullYear() - 30)
        ),
        Courses: { connect: [{ id: (i % 10) + 1 }] },
      },
    });
  }

  // LESSON
  for (let i = 1; i <= 30; i++) {
    await prisma.lessons.create({
      data: {
        id: `lesson${i}`,
        name: loremIpsum({ count: 1, units: "words" }),
        description: loremIpsum({ count: 1, units: "paragraphs" }),
        previewImage: `https://picsum.photos/200/300?random=${i}`,
        videoUrl: `https://picsum.photos/200/300?random=${i}`,
        pdfUrl: `https://picsum.photos/200/300?random=${i}`,
        day: Day[
          Object.keys(Day)[
            Math.floor(Math.random() * Object.keys(Day).length)
          ] as keyof typeof Day
        ],
        startTime: new Date(new Date().setHours(new Date().getHours() + 2)),
        endTime: new Date(new Date().setHours(new Date().getHours() + 4)),
        Courses: { connect: [{ id: (i % 10) + 1 }] },
      },
    });
  }

  // STUDENT
  for (let i = 1; i <= 50; i++) {
    const student = await prisma.student.create({
      data: {
        id: `student${i}`,
        email: `student${i}@example.com`,
        username: `student${i}`,
        phone: `987-654-321${i}`,
        name: `SName${i}`,
        surname: `SSurname ${i}`,
        address: `Address${i}`,
        img: `https://picsum.photos/200/300?random=${i}`,
        sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
        birthday: new Date(
          new Date().setFullYear(new Date().getFullYear() - 10)
        ),
        Courses: { connect: [{ id: (i % 10) + 1 }] },
      },
    });

    // Öğrencinin derslerle ilişkisini güncelleme
    const coursesForStudent = await prisma.courses.findMany({
      where: { id: { in: [(i % 10) + 1] } },
      include: { lessons: true }, // lessons ile ilişkiyi dahil ediyoruz
    });

    // Öğrencinin dersleri ve ders tamamlanma durumu
    for (const course of coursesForStudent) {
      for (const lesson of course.lessons) {
        await prisma.studentLessons.create({
          data: {
            studentId: student.id,
            lessonId: lesson.id,
            lessonCompletion: Math.random() < 0.5, // Rastgele tamamlanma durumu
          },
        });
      }
    }
  }

  console.log("Seeding completed successfully.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

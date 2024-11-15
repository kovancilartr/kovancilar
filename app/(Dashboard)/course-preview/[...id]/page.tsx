"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";

export default function CoursePage() {
  const params = useParams();
  
  const [ id, setId ] = useState<string[]>([]);

  useEffect(() => {
    if (params.id) {
      setId(Array.isArray(params.id) ? params.id : [params.id]);
    }
  }, [params.id]);
  console.log("id", id);
  const courses = [
    {
      id: 1,
      name: "Full Stack Appointment Booking App1",
      description:
        "Discover the complete process of developing and deploying a cutting-edge Full Stack Appointment Booking App from scratch! In this comprehensive tutorial, we delve into the integration of Next.js, React.js, Strapi, and Tailwind CSS to create a seamless user experience. Whether you're a beginner or an experienced developer, this step-by-step guide will equip you with the skills to build and launch your own robust appointment booking application. Don't miss out on mastering full stack development and taking your projects to the next level!",
      image: "/g1.png",
      sourceCode: "/g1.png",
      appDemo: "/g1.png",
      youtube: "/g1.png",
      locked: false,
    },
    {
      id: 2,
      name: "Full Stack Appointment Booking App2",
      description:
        "Discover the complete process of developing and deploying a cutting-edge Full Stack Appointment Booking App from scratch! In this comprehensive tutorial, we delve into the integration of Next.js, React.js, Strapi, and Tailwind CSS to create a seamless user experience. Whether you're a beginner or an experienced developer, this step-by-step guide will equip you with the skills to build and launch your own robust appointment booking application. Don't miss out on mastering full stack development and taking your projects to the next level!",
      image: "/g2.png",
      sourceCode: "/g2.png",
      appDemo: "/g2.png",
      youtube: "/g2.png",
      locked: true,
    },
    {
      id: 3,
      name: "Full Stack Appointment Booking App3",
      description:
        "Discover the complete process of developing and deploying a cutting-edge Full Stack Appointment Booking App from scratch! In this comprehensive tutorial, we delve into the integration of Next.js, React.js, Strapi, and Tailwind CSS to create a seamless user experience. Whether you're a beginner or an experienced developer, this step-by-step guide will equip you with the skills to build and launch your own robust appointment booking application. Don't miss out on mastering full stack development and taking your projects to the next level!",
      image: "/g3.png",
      sourceCode: "/g3.png",
      appDemo: "/g3.png",
      youtube: "/g3.png",
      locked: true,
    },
    {
      id: 4,
      name: "Full Stack Appointment Booking App4",
      description:
        "Discover the complete process of developing and deploying a cutting-edge Full Stack Appointment Booking App from scratch! In this comprehensive tutorial, we delve into the integration of Next.js, React.js, Strapi, and Tailwind CSS to create a seamless user experience. Whether you're a beginner or an experienced developer, this step-by-step guide will equip you with the skills to build and launch your own robust appointment booking application. Don't miss out on mastering full stack development and taking your projects to the next level!",
      image: "/g4.png",
      sourceCode: "/g4.png",
      appDemo: "/g4.png",
      youtube: "/g4.png",
      locked: true,
    },
    {
      id: 5,
      name: "Full Stack Appointment Booking App",
      description:
        "Discover the complete process of developing and deploying a cutting-edge Full Stack Appointment Booking App from scratch! In this comprehensive tutorial, we delve into the integration of Next.js, React.js, Strapi, and Tailwind CSS to create a seamless user experience. Whether you're a beginner or an experienced developer, this step-by-step guide will equip you with the skills to build and launch your own robust appointment booking application. Don't miss out on mastering full stack development and taking your projects to the next level!",
      image: "/g5.png",
      sourceCode: "/g5.png",
      appDemo: "/g5.png",
      youtube: "/g5.png",
      locked: true,
    },
    {
      id: 6,
      name: "Full Stack Appointment Booking App",
      description:
        "Discover the complete process of developing and deploying a cutting-edge Full Stack Appointment Booking App from scratch! In this comprehensive tutorial, we delve into the integration of Next.js, React.js, Strapi, and Tailwind CSS to create a seamless user experience. Whether you're a beginner or an experienced developer, this step-by-step guide will equip you with the skills to build and launch your own robust appointment booking application. Don't miss out on mastering full stack development and taking your projects to the next level!",
      image: "/g6.png",
      sourceCode: "/g6.png",
      appDemo: "/g6.png",
      youtube: "/g6.png",
      locked: true,
    },
    {
      id: 7,
      name: "Full Stack Appointment Booking App",
      description:
        "Discover the complete process of developing and deploying a cutting-edge Full Stack Appointment Booking App from scratch! In this comprehensive tutorial, we delve into the integration of Next.js, React.js, Strapi, and Tailwind CSS to create a seamless user experience. Whether you're a beginner or an experienced developer, this step-by-step guide will equip you with the skills to build and launch your own robust appointment booking application. Don't miss out on mastering full stack development and taking your projects to the next level!",
      image: "/g7.png",
      sourceCode: "/g7.png",
      appDemo: "/g7.png",
      youtube: "/g7.png",
      locked: true,
    },
    {
      id: 8,
      name: "Full Stack Appointment Booking App",
      description:
        "Discover the complete process of developing and deploying a cutting-edge Full Stack Appointment Booking App from scratch! In this comprehensive tutorial, we delve into the integration of Next.js, React.js, Strapi, and Tailwind CSS to create a seamless user experience. Whether you're a beginner or an experienced developer, this step-by-step guide will equip you with the skills to build and launch your own robust appointment booking application. Don't miss out on mastering full stack development and taking your projects to the next level!",
      image: "/g8.png",
      sourceCode: "/g8.png",
      appDemo: "/g8.png",
      youtube: "/g8.png",
      locked: true,
    },
    {
      id: 9,
      name: "Full Stack Appointment Booking App",
      description:
        "Discover the complete process of developing and deploying a cutting-edge Full Stack Appointment Booking App from scratch! In this comprehensive tutorial, we delve into the integration of Next.js, React.js, Strapi, and Tailwind CSS to create a seamless user experience. Whether you're a beginner or an experienced developer, this step-by-step guide will equip you with the skills to build and launch your own robust appointment booking application. Don't miss out on mastering full stack development and taking your projects to the next level!",
      image: "/g9.png",
      sourceCode: "/g9.png",
      appDemo: "/g9.png",
      youtube: "/g9.png",
      locked: true,
    },
    {
      id: 10,
      name: "Full Stack Appointment Booking App",
      description:
        "Discover the complete process of developing and deploying a cutting-edge Full Stack Appointment Booking App from scratch! In this comprehensive tutorial, we delve into the integration of Next.js, React.js, Strapi, and Tailwind CSS to create a seamless user experience. Whether you're a beginner or an experienced developer, this step-by-step guide will equip you with the skills to build and launch your own robust appointment booking application. Don't miss out on mastering full stack development and taking your projects to the next level!",
      image: "/g10.png",
      sourceCode: "/g10.png",
      appDemo: "/g10.png",
      youtube: "/g10.png",
      locked: true,
    },
    {
      id: 11,
      name: "Full Stack Appointment Booking App",
      description:
        "Discover the complete process of developing and deploying a cutting-edge Full Stack Appointment Booking App from scratch! In this comprehensive tutorial, we delve into the integration of Next.js, React.js, Strapi, and Tailwind CSS to create a seamless user experience. Whether you're a beginner or an experienced developer, this step-by-step guide will equip you with the skills to build and launch your own robust appointment booking application. Don't miss out on mastering full stack development and taking your projects to the next level!",
      image: "/g9.png",
      sourceCode: "/g9.png",
      appDemo: "/g9.png",
      youtube: "/g9.png",
      locked: true,
    },
    {
      id: 12,
      name: "Full Stack Appointment Booking App",
      description:
        "Discover the complete process of developing and deploying a cutting-edge Full Stack Appointment Booking App from scratch! In this comprehensive tutorial, we delve into the integration of Next.js, React.js, Strapi, and Tailwind CSS to create a seamless user experience. Whether you're a beginner or an experienced developer, this step-by-step guide will equip you with the skills to build and launch your own robust appointment booking application. Don't miss out on mastering full stack development and taking your projects to the next level!",
      image: "/g10.png",
      sourceCode: "/g10.png",
      appDemo: "/g10.png",
      youtube: "/g10.png",
      locked: true,
    },
    {
      id: 13,
      name: "Full Stack Appointment Booking App",
      description:
        "Discover the complete process of developing and deploying a cutting-edge Full Stack Appointment Booking App from scratch! In this comprehensive tutorial, we delve into the integration of Next.js, React.js, Strapi, and Tailwind CSS to create a seamless user experience. Whether you're a beginner or an experienced developer, this step-by-step guide will equip you with the skills to build and launch your own robust appointment booking application. Don't miss out on mastering full stack development and taking your projects to the next level!",
      image: "/g9.png",
      sourceCode: "/g9.png",
      appDemo: "/g9.png",
      youtube: "/g9.png",
      locked: true,
    },
    {
      id: 14,
      name: "Full Stack Appointment Booking App",
      description:
        "Discover the complete process of developing and deploying a cutting-edge Full Stack Appointment Booking App from scratch! In this comprehensive tutorial, we delve into the integration of Next.js, React.js, Strapi, and Tailwind CSS to create a seamless user experience. Whether you're a beginner or an experienced developer, this step-by-step guide will equip you with the skills to build and launch your own robust appointment booking application. Don't miss out on mastering full stack development and taking your projects to the next level!",
      image: "/g10.png",
      sourceCode: "/g10.png",
      appDemo: "/g10.png",
      youtube: "/g10.png",
      locked: true,
    },
  ];
  const videoOptions = {
    url: "https://media.graphassets.com/afYFwe4MQdCZ5rghZfoB",
    controls: true,
    width: 1000,
    height: 459,
    className: "shadow-xl",
    poster: "https://media.graphassets.com/Yspfl5wqRBCTQ2mxTib6",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-black">
      {/* CONTENT SOL BÖLÜM */}
      <div className="col-span-2 bg-white p-3 rounded-sm shadow-sm h-fit">
        <div>
          <h2 className="text-[20px] font-semibold">
            Full Stack Appointment Booking App
          </h2>
          <h2 className="text-gray-500 text-[14px] mb-3">Tubeguruji</h2>

          {/* VİDEO GELİCEK */}
          <div className="flex justify-center items-center">
            <VideoPlayer videoOptions={videoOptions} />
          </div>

          <h2 className="mt-5 text-[17px] font-semibold">
            <span>About This Course</span>
          </h2>
          <div className="text-[13px] font-light mt-2 leading-7">
            <p>
              Discover the complete process of developing and deploying a
              cutting-edge Full Stack Appointment Booking App from scratch! In
              this comprehensive tutorial, we delve into the integration of
              Next.js, React.js, Strapi, and Tailwind CSS to create a seamless
              user experience. Whether  a beginner or an experienced
              developer, this step-by-step guide will equip you with the skills
              to build and launch your own robust appointment booking
              application. miss out on mastering full stack development
              and taking your projects to the next level!
            </p>
          </div>
        </div>
      </div>
      {/* CONTENT SAĞ BÖLÜM */}
      <div>
        <div className="p-3 text-center rounded-sm bg-primary mb-3">
          <h2 className="text-[22px] font-bold">Enroll to the Course</h2>
          <div className="flex flex-col gap-3 mt-3">
            <h2 className="font-light">
              Enroll Now to Start Learning and Building the project
            </h2>
            <a href="/sign-in">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm 
              font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 
              focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
              h-10 px-4 py-2 bg-white text-black hover:bg-primary-one hover:text-white"
              >
                Enroll Now
              </button>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 border rounded-lg flex flex-col items-center w-full cursor-pointer bg-white mb-3">
            <Image src="/g1.png" alt="" width={30} height={30} />
            <h2 className="text-[14px] texr-gray-500">Source Code</h2>
          </div>
          <div className="p-2 border rounded-lg flex flex-col items-center w-full cursor-pointer bg-white mb-3">
            <Image src="/g2.png" alt="" width={30} height={30} />
            <h2 className="text-[14px] texr-gray-500">App Demo</h2>
          </div>
          <div className="p-2 border rounded-lg flex flex-col items-center w-full cursor-pointer bg-white mb-3">
            <Image src="/g3.png" alt="" width={30} height={30} />
            <h2 className="text-[14px] texr-gray-500">Youtube</h2>
          </div>
        </div>
        <div className="p-3 bg-white rounded-sm">
          <h2 className="text-xl text-center">İçerikler</h2>
          {courses.map((item, index) => (
            <div key={index}>
              <h2
                className={`p-2 text-[14px] flex justify-between items-center m-2 border rounded-sm px-4 cursor-pointer  ${
                  !item.locked
                    ? "bg-primary-two text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {item.name}
                {!item.locked ? (
                  <Image
                    src={`/play.svg`}
                    alt=""
                    width={20}
                    height={20}
                    style={{ filter: "invert(1)" }}
                  />
                ) : (
                  <Image src={`/locked.svg`} alt="" width={20} height={20} />
                )}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-fit">
      <div className="flex flex-col items-center border-2 rounded-md bg-white p-4 mx-16 shadow-md dark:bg-gray-900 dark:border-gray-700">
        <Image
          src={"/about1.jpeg"}
          alt="pf"
          width={1500}
          height={1500}
          className="w-3/4 h-[240px] mb-10 rounded-lg object-cover dark:shadow-gray-700 shadow-lg"
        />
        <Image
          src="/pf.jpg"
          alt="pf"
          width={500}
          height={500}
          className="rounded-full w-60 h-60 border-4 border-amber-300 dark:border-amber-400 
          brightness-90 hover:brightness-100 transition-all duration-300 mb-2"
        />
        <h1 className="text-3xl font-bold">Kovancılar Yazılım</h1>
        <p className="text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          dicta eaque nobis laborum! Adipisci, a incidunt? Possimus blanditiis,
          odio voluptate laudantium fugiat nobis sequi perferendis facere
          repudiandae esse placeat sint libero numquam temporibus provident illo
          architecto minima, vero voluptatibus veritatis iure explicabo. Vero,
          dolore. Quibusdam veritatis aliquid voluptatibus fuga delectus
          laudantium debitis nemo iure consequatur praesentium at laboriosam,
          qui nulla alias necessitatibus, similique reprehenderit doloribus
          asperiores vel architecto autem. Iste fugit quidem impedit laborum
          vitae voluptas ipsam dolor asperiores? Dignissimos quia dolore
          voluptatum pariatur magni, aut modi, doloremque sunt ipsam doloribus,
          excepturi incidunt! Ratione, veritatis excepturi illum amet quae
          possimus culpa tenetur. lorem405
        </p>
        <div className="flex gap-16 my-4 dark:text-black">
          <Button variant="default" size="lg">
            <YoutubeIcon className="w-16 h-16" />
            <span>Youtube</span>
          </Button>

          <Button variant="default" size="lg">
            <InstagramIcon className="w-16 h-16" />
            <span>Instagram</span>
          </Button>

          <Button variant="default" size="lg">
            <LinkedinIcon className="w-16 h-16" />
            <span>LinkedIn</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

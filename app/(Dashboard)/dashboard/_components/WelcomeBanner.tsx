"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const WelcomeBanner = () => {
  const { user } = useUser();
  return (
    <div className="p-5 w-full rounded-lg bg-blue-500 text-white dark:bg-blue-600 dark:text-white flex items-center gap-6">
      <Image src="/welcome.png" alt="welcome" width={40} height={30} />

      <div>
        <h2 className="font-bold text-3xl">
          Merhaba
          {!user ? (
            ""
          ) : (
            <>
              {", "}
              <span className="text-primary font-bold italic">
                {" "}
                {user?.fullName}
              </span>
            </>
          )}
        </h2>
        <p className="text-semibold">
          Welcome backs, Its time to get back and start learning new course
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;

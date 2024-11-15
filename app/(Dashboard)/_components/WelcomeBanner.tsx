"use client";
import { useAuthContext } from "@/app/AuthProvider";
import Image from "next/image";
import React from "react";

const WelcomeBanner = () => {
  const { currentUser } = useAuthContext();

  return (
    <div className="p-5 w-full rounded-lg bg-blue-500 text-white dark:bg-blue-600 dark:text-white flex items-center gap-6">
      <Image
        src="/welcome.png"
        alt="welcome"
        width={40}
        height={30}
        className="h-30 w-30"
        style={{ width: "auto", height: "auto" }}
      />

      <div>
        <h2 className="font-bold text-3xl">
          Merhaba
          {!currentUser ? (
            ""
          ) : (
            <>
              {", "}
              <span className="text-primary font-bold italic">
                {" "}
                {currentUser?.fullName}
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

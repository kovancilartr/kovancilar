"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppLogo = () => {
  return (
    <>
      <Link href="/" className="flex item-center gap-2">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <h2 className="text-2xl font-bold">K Portfolio</h2>
      </Link>
    </>
  );
};

export default AppLogo;

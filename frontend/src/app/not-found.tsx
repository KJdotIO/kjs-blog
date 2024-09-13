import React from "react";
import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex items-center justify-end min-h-[100vh] flex-col gap-10">
      <div>
        <h1 className="text-[100px] mx-4">Doesn&apos;t exist...</h1>
        <Link
          href="/"
          className="text-[20px] mx-4 text-black dark:text-white rounded-lg transition-all duration-300 ease-in-out"
        >
          Go back home
        </Link>
      </div>
      <div className="w-[400px] lg:w-[500px] relative">
        <Image
          src="/thales-blackbar.png"
          alt="Thales Blackbar"
          layout="responsive"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}

export default NotFound;

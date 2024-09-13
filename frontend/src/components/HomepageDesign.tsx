import React from "react";
import Image from "next/image";

function HomepageDesign() {
  return (
    <div className="pt-8">
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/featured-bg-2.svg"
            alt="Background pattern"
            layout="fill"
            objectFit="cover"
            objectPosition="left center"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center p-4 sm:p-8">
          <p className="text-xs uppercase tracking-widest mb-2">A Journal</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-2">
            Insight
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic font-thin">
            A collection of thoughts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomepageDesign;

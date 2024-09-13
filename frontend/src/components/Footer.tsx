import React from "react";
import RenderImage from "./RenderImage";

function Footer() {
  return (
    <div className="w-full gap-10 flex justify-between items-center main-gutter py-5 bg-[#eee9dd] dark:bg-[#1c1c1c]">
      <RenderImage width={100} height={100} />
      <div className="flex flex-col">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Footer stuff...
        </h1>
        <p className=" text-md font-thin">
          I&apos;ll put what you typically put in footers here soon.
        </p>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import Image from "next/image";
import Link from "next/link";

type ImageType = {
  width: number;
  height: number;
};

function RenderImage({ width, height }: ImageType) {
  return (
    <Link href="/">
      <Image
        src="/logos/utopia-logo-white.png"
        width={width}
        height={height}
        alt="utopia logo"
        className="hidden dark:block"
      />

      <Image
        src="/logos/utopia-logo-dark.png"
        width={width}
        height={height}
        alt="utopia logo"
        className="block dark:hidden"
      />
    </Link>
  );
}

export default RenderImage;

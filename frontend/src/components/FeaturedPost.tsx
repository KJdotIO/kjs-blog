import React from "react";
import Image from "next/image";
import { Article } from "../../types";
import { introText } from "../../lib/renderContent";
import Link from "next/link";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

dayjs.extend(advancedFormat);

type FeaturedPostProps = {
  articles: Article[];
};

function FeaturedPost({ articles }: FeaturedPostProps) {
  const formateddate = articles.length
    ? dayjs(`${articles[0].attributes.published}`).format("Do MMMM, YYYY")
    : null;

  return (
    <div className="relative w-full h-[50vh] lg:h-[60vh] mx-auto cursor-pointer">
      {articles.length > 0 ? (
        <Link href={`/articles/${articles[0].attributes.slug}`}>
          <>
            {articles[0].attributes.thumbnail?.data ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${articles[0].attributes.thumbnail.data.attributes.url}`}
                alt="Featured Post Image"
                layout="fill"
                objectFit="cover"
                priority
                className="shadow-lg"
              />
            ) : (
              <Skeleton height="100%" width="100%" />
            )}
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
            {/* Content */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end px-8 pb-10 gap-3">
              <p className="text-xs text-white uppercase tracking-widest">
                {formateddate || <Skeleton width={100} />}
              </p>
              <h1 className="text-white text-3xl md:text-4xl lg:text-6xl">
                {articles[0].attributes.title || <Skeleton width="80%" />}
              </h1>
              <p className="text-white text-sm md:text-md lg:text-lg line-clamp-2">
                {articles[0].attributes.content[0]?.children ? (
                  introText(articles[0].attributes.content[0].children)
                ) : (
                  <Skeleton count={2} />
                )}
              </p>
              <div className="flex items-center flex-wrap gap-3">
                {articles[0].attributes.tags.data.length ? (
                  articles[0].attributes.tags.data.map((tag) => (
                    <div
                      key={tag.id}
                      className="text-white text-xs border-[1px] border-white py-1 px-3 rounded-full"
                    >
                      {tag.attributes.tag}
                    </div>
                  ))
                ) : (
                  <Skeleton width={50} height={20} count={3} />
                )}
              </div>
            </div>
          </>
        </Link>
      ) : (

        <>
          <Skeleton height="100%" width="100%" />
          <div className="absolute inset-0 z-10 flex flex-col justify-end px-8 pb-10 gap-3">
            <Skeleton width={100} />
            <Skeleton width="80%" height={40} />
            <Skeleton width="90%" height={20} count={2} />
            <Skeleton width={50} height={20} count={3} />
          </div>
        </>
      )}
    </div>
  );
}

export default FeaturedPost;

import React from "react";
import { Article } from "../../types";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { introText } from "../../lib/renderContent";
import Link from "next/link";

type PostProps = {
  article: Article;
};

function Post({ article }: PostProps) {
  return (
    <div className="flex flex-col gap-5 filter grayscale hover:grayscale-0 transition duration-500 ease-in-out">
      <div className="h-[210px] bg-gray-400 relative" >
        <Link href={`/articles/${article.attributes.slug}`}>
          <Image
            src={`${article.attributes.thumbnail.data.attributes.url}`}
            alt="Featured Post Image"
            fill={true}
            objectFit="cover"
          />
        </Link>
      </div>
        <Link href={`/articles/${article.attributes.slug}`}>
      <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p>{article.attributes.title}</p>
            <BsArrowUpRight />
          </div>
          <p className="font-extralight line-clamp-2">
            {introText(article.attributes.content[0].children)}
          </p>
          <div className="flex gap-2 flex-wrap">
            {article.attributes.tags &&
              article.attributes.tags.data.map((tag) => (
                <div
                  key={tag.id}
                  className={`text-[10px] border-black dark:border-white border-[1px] py-1 px-3 rounded-full`}
                >
                  {tag.attributes.tag}
                </div>
              ))}
          </div>
      </div>
        </Link>
    </div>
  );
}

export default Post;

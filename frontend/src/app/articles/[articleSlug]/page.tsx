import { Article } from "../../../../types";
import { fetchData } from "../../../../lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { renderContent } from "../../../../lib/renderContent";
import { Metadata } from "next";
import ReaderSettings from "@/components/ReaderSettings";
dayjs.extend(advancedFormat);

type ArticlePageProps = {
  params: {
    articleSlug: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: { articleSlug: string };
}): Promise<Metadata> {
  const { articleSlug } = params;

  const result = await fetchData(
    `/articles?filters[slug][$eq]=${articleSlug}&populate=*`
  );

  const article = result.data[0]?.attributes;

  if (!article) {
    return {
      title: "Article not found",
      description: "This article could not be found.",
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://www.utopianinsight.live/articles/${articleSlug}`,
      images: [
        {
          url: article.thumbnail.data.attributes.url,
          width: 800,
          height: 600,
          alt: article.title,
        },
      ],
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { articleSlug } = params;
  const result = await fetchData(
    `/articles?filters[slug][$eq]=${articleSlug}&populate=*`,
  );

  const article: Article = result.data[0];

  if (result.data.length === 0) {
    notFound();
  }

  const formateddate = dayjs(`${article.attributes.published}`).format(
    "Do MMMM, YYYY",
  );

  return (
    <div className="main-gutter flex flex-col items-center">

      <section className="flex flex-col items-center gap-4">
        <h1 className="text-3xl sm:text-4xl text-wrap md:text-6xl lg:text-7xl text-center mt-10">
          {article.attributes.title}
        </h1>
        <div className="flex gap-4 flex-col items-center">
          <div className="flex gap-2">
            <p>{article.attributes.author}</p> | <p>{formateddate}</p>{" "}
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {article.attributes.tags.data.map((tag) => (
              <div
                key={tag.id}
                className="text-[14px] border-black dark:border-white border-[1px] py-1 px-3 rounded-full"
              >
                {tag.attributes.tag}
              </div>
            ))}
          </div>
          <div className="my-8">
            <Image
              src={`${article.attributes.thumbnail.data.attributes.url}`}
              width={900}
              height={100}
              alt=""
              className=""
            />
          </div>
        </div>
      </section>
      <main className="max-w-[800px] mb-10">
        {renderContent(article.attributes.content)}
      </main>
    </div>
  );
}

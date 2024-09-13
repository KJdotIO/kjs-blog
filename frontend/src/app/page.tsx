import { fetchData } from "../../lib/api";
import { Article } from "../../types";
import FeaturedPost from "@/components/FeaturedPost";
import Post from "@/components/Post";
import HomepageDesign from "@/components/HomepageDesign";
import Image from "next/image";

export default async function Home() {
  const featuredRes = await fetchData(
    "/articles?filters[isFeatured][$eq]=true&populate=*",
  );
  const featuredArticles: Article[] = featuredRes.data;

  const regularRes = await fetchData(
    "/articles?filters[isFeatured][$eq]=false&populate=*",
  );
  const regularArticles: Article[] = regularRes.data;
  return (
    <>
      <div className={`min-h-[100vh] main-gutter`}>
        <main className="flex flex-col gap-8 py-8">
          <HomepageDesign />
          <div className="">
            <FeaturedPost articles={featuredArticles} />
          </div>

          {regularArticles.length === 0 ? (
            <div className="flex flex-col items-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                When more articles are made, they&apos;ll show up here.
              </h1>
              <div className="w-[400px] lg:w-[500px] relative -bottom-8">
                <Image
                  src="/thales-blackbar.png"
                  alt="Thales Blackbar"
                  layout="responsive"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
                {regularArticles.map((article) => (
                  <Post key={article.id} article={article} />
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
}

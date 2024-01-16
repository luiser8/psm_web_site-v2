import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import newsData from "../../utils/mock/newsData";
import { NavLink as Link } from "react-router-dom";

export default function NewsDetails() {
  let newsId = useParams();
  const [news, setNews] = useState({});
  const filterNews = (id) => {
    let list = newsData.find((x) => x.id === id);
    setNews(list);
  };

  useEffect(() => {
    filterNews(Number(newsId.id));
  }, []);

  return (
    <div className="bg-white py-20 sm:py-20">
      {Object.keys(news).length > 0 ? (
        <div className="w-full h-full bg-white py-10 dark:bg-dark">
          <section className=" bg-[#fff] w-60% md:w-[55%] h-auto flex justify-start flex-col py-4 px-4 gap-y-5 mx-auto rounded dark:bg-black">
          <section className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4 flex flex-row items-start gap-x-10">
              <Link to={news.principal ? "/" : "/noticias"}>
                    <img
                      src="\images\carreras\arrows\arrow-left.png"
                      alt="arrow"
                      className="w-32 mb-4 dark:bg-white rounded-full"
                    />
                  </Link>
                <div className="relative h-12 w-full overflow-hidden rounded-full">
                  <img
                    src={news.author.image}
                    alt="author"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {news.author.name}
                </h4>
                <p className="text-xs text-body-color">
                  {news.author.designation}
                </p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{news.publishDate}</p>
            </div>
          </section>

          <section>
            <img
              src={news.image}
              alt="photo"
              className="w-full h-[80%] mb-5 rounded"
            />
            <span className="flex flex-col gap-y-3">
              <h1 className="font-bold text-2xl md:text-3xl">{news.title}</h1>
              <h2 className="font-semibold text-lg md:text-xl">
                {news.details.subTitle}
              </h2>
              <p>{news.details.paragraph}</p>
            </span>
          </section>
        </section>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

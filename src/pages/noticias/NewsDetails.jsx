import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import newsData from "../../utils/mock/newsData";
import { NavLink as Link } from "react-router-dom";

export default function NewsDetails() {
  let newsId = useParams();
  const [news, setNews] = useState([]);
  const filterNews = (id) => {
    let list = newsData.filter((x) => x.id === id);
    setNews(list);
  };

  useEffect(() => {
    filterNews(Number(newsId.id));
  }, []);

  return (
    <>
      {news.length !== 0 ? (
        <section className=" bg-[#fff] w-[80%] h-auto flex justify-start flex-col py-4 px-4 gap-y-5 mx-auto my-5 rounded  ">
          <Link to={"/"}>
            <img
              src="\images\carreras\arrows\arrow-left.png"
              alt="arrow"
              className="w-9 mb-4"
            />
          </Link>
          <section className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src={news[0].author.image}
                    alt="author"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {news[0].author.name}
                </h4>
                <p className="text-xs text-body-color">
                  {news[0].author.designation}
                </p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{news[0].publishDate}</p>
            </div>
          </section>

          <section>
            <img
              src={news[0].image}
              alt="photo"
              className="w-full h-[80%] mb-5 rounded"
            />
            <span className="flex flex-col gap-y-3">
              <h1 className="font-bold text-2xl md:text-3xl">
                {news[0].title}
              </h1>
              <h2 className="font-semibold text-lg md:text-xl">
                {news[0].details.subTitle}
              </h2>
              <p>{news[0].details.paragraph}</p>
            </span>
          </section>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

import React from "react";
import { NavLink as Link } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";
import SingleNews from "../../components/common/SingleNews";
import newsData from "../../utils/mock/newsData";

export default function NewsAll() {
  return (
    <div className="bg-white py-20 sm:py-20">
    <section id="blog" className="bg-white py-10 w-full mx-auto dark:bg-dark">
      <div className="container">
        <div className="flex flex-row mb-10 mx-auto">
          <Link to={"/"}>
            <img
              src="\images\carreras\arrows\arrow-left.png"
              alt="arrow"
              className="w-12 mb-4 dark:bg-white rounded-full"
            />
          </Link>
          <SectionTitle
            title="Noticias"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {newsData
            .filter((x) => x.principal === false)
            .map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleNews blog={blog} />
              </div>
            ))}
        </div>
      </div>
    </section>
    </div>
  );
}

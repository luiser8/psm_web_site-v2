import React from "react";
import { NavLink as Link } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";
import SingleNews from "../../components/common/SingleNews";
import newsData from "../../utils/mock/principalData/newsData";

export default function NewsAll() {
  return (
    <div className="bg-white py-20 sm:py-20">
    <section id="blog" className="bg-white py-10 w-full mx-auto dark:bg-dark">
      <div className="container">
        <div className="flex flex-row mb-10 mx-auto">
          <SectionTitle
            title="Noticias"
            paragraph=""
            center
          />
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {newsData.noticias_data
            .filter((x) => x.principal === true)
            .map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleNews blog={blog} detail={newsData.path} />
              </div>
            ))}
        </div>
      </div>
    </section>
    </div>
  );
}

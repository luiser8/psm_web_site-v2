import React from 'react'
import { NavLink as Link } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";
import SingleNews from "../../components/common/SingleNews";
import newsData from "../../utils/mock/newsData";

export default function NewsAll() {
  return (
    <section id="blog" className="bg-primary/5 py-10 w-full mx-auto">
      <div className="container">
      <Link to={"/"}>
            <img
              src="\images\carreras\arrows\arrow-left.png"
              alt="arrow"
              className="w-12 mb-4"
            />
          </Link>
        <SectionTitle
          title="Noticias"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {newsData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleNews blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

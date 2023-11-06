import React from "react";
import AboutData from "../../utils/mock/AboutData";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {AboutData.active ? (
        <section className="w-full h-full overflow-hidden px-5 lg:px-20 py-20">
            <Link to={"/"}>
                <img
                  src="\images\carreras\arrows\arrow-left.png"
                  alt="arrow"
                  className="w-10"
                />
              </Link>
          <header className="py-4 w-full text-start border-b-[1px] border-black mx-auto">
            <h1 className="text-3xl lg:text-5xl font-bold">{AboutData.data.name}</h1>
          </header>
          <main className="flex gap-y-5 lg:gap-x-5 justify-center items-center content-center flex-col py-8 lg:flex-row">
            <div className="w-full h-full">
            <img src={AboutData.data.image} alt="acerca" className="object-fill object-center h-72 w-full lg:h-[50vh]  rounded-md" />
            </div>
            <span className="text-start lg:w-[70%]">
              <h2 className="font-bold text-2xl lg:text-3xl mb-3">{AboutData.data.title}</h2>
              <h3>
                <h2 className="font-semibold text-gray-500 mb-3 lg:text-lg">{AboutData.data.subtitle}</h2>
              </h3>
              <p className="font-normal lg:text-lg">{AboutData.data.description}</p>
            </span>
          </main>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

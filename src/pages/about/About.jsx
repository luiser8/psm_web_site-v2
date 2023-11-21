import React from "react";
import AboutData from "../../utils/mock/aboutData";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";

export default function About() {
  return (
    <>
      {AboutData.active ? (
        <section className="w-full h-screen dark:bg-dark">
        <div className="w-[90%] xl:w-[80%] h-full  overflow-hidden py-20 mx-auto ">
          <header className="py-4 w-full text-start border-b-[1px] border-black dark:border-white mx-auto flex flex-row gap-x-12 items-center">
          <Link to={"/"}>
            <img
              src="\images\carreras\arrows\arrow-left.png"
              alt="arrow"
              className="w-12 dark:bg-white rounded-full"
            />
          </Link>
            <h2 className="text-3xl lg:text-5xl font-bold">
              {AboutData.data.name}
            </h2>
          </header>
          <main className="flex gap-y-5 lg:gap-x-5 justify-center items-center content-center flex-col py-8 lg:flex-row">
            <div className="w-full h-full">
              <img
                src={AboutData.data.image}
                alt="acerca"
                className="object-fill object-center h-72 w-full lg:h-[50vh]  rounded-md"
              />
            </div>
            <span className="text-start lg:w-[70%]">
              <h2 className="font-bold text-3xl lg:text-3xl mb-3">
                {AboutData.data.title}
              </h2>
              <h3>
                <h2 className="font-semibold text-gray-500 mb-3 lg:text-lg dark:text-white">
                  {AboutData.data.subtitle}
                </h2>
              </h3>
              <p className="font-normal lg:text-lg text-justify">
                {AboutData.data.description}
              </p>
            </span>
          </main>
        </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

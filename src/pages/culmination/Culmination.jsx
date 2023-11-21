import React from "react";
import CulminationData from "../../utils/mock/culminationData";
import SectionTitle from "../../components/common/SectionTitle";
import { Link } from "react-router-dom";

export default function Culmination() {
  return (
    <>
      {CulminationData.active ? (
        <section className="text-gray-600 body-font overflow-hidden mt-5">
          <div className="container px-5 py-16 mx-auto">
            <span className="w-[100%] flex mx-auto">
              <Link to={"/"}>
                <img
                  src="\images\carreras\arrows\arrow-left.png"
                  alt="arrow"
                  className="w-12 mb-5"
                />
              </Link>
              <SectionTitle title={CulminationData.name} center={"center"} />
            </span>
            {CulminationData.data.accidents.map((item) => (
              <div
                className="-my-8 divide-y-2 divide-gray-100 mt-5 mb-5"
                key={item.id}
              >
                <div className="py-4 flex flex-wrap md:flex-nowrap gap-4 px-4 ">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col ml">
                    <span className="font-semibold title-font text-gray-700 text-justify">
                      {item.title}
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">
                      {item.date}
                    </span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 text-justify">
                      {item.subtitle}
                    </h2>
                    <p className="leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

import React from "react";
import SectionTitle from "../../components/common/SectionTitle";

export default function Registrations({ data }) {
  return (
    <>
      <div className="container">
        <SectionTitle center={"center"} title={"Inscripciones y periodos"} />
        {data.map((item) => (
          <div className="-my-8 divide-y-2 divide-gray-100 mt-5" key={item.id}>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  {item.title}
                </span>
                <span className="mt-1 text-gray-500 text-sm">{item.date}</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  {item.subTitle}
                </h2>
                <p className="leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

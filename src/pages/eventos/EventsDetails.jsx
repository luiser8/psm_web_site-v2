import React from "react";
import detallesEventosData from "../../utils/mock/detallesEventosData";

export default function EventsDetails() {
  return (
    <>
      {detallesEventosData.active ? (
        <section className="mt-5  w-[90%] xl:w-[80%] h-full  flex justify-center items-center gap-y-6 flex-col p-2  xl:p-3 rounded-lg  mx-auto md:flex-row md:gap-x-24">
          <div className=" mb-5 overflow-hidden h-screen md:w-1/2 justify-end ">
            <img
              src={detallesEventosData.image}
              alt="eventos"
              className=" mx-auto w-full h-full object-contain object-center"
            />
          </div>

          <div className="h-full md:w-1/2 flex items-center flex-col justify-center">
            <h1 className="text-xl mb-3 font-bold text-start md:text-lg xl:text-2xl">
              {detallesEventosData.title}
            </h1>
            <span className="text-base font-normal leading-6 text-justify xl:leading-8">
              {detallesEventosData.data.map((detail, index) => (
                <p className="my-2" key={index}>
                  {detail.description}
                </p>
              ))}
            </span>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

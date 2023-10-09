import React from "react";
import detallesEventosData from "../../utils/mock/detallesEventosData";

export default function EventsDetails() {
  return (
    <>
      {detallesEventosData.active ? (
        <section className="mt-10  w-[90%] xl:w-[80%] h-full  flex justify-center items-center gap-y-5 flex-col p-2  xl:p-3 rounded-lg  mx-auto md:flex-row md:gap-x-10  lg:mt-10  ">
          <div className=" mb-5 overflow-hidden h-screen md:w-1/2 ">
            <img
              src={detallesEventosData.data.image}
              alt="eventos"
              className=" mx-auto w-full h-full object-fill object-center"
            />
          </div>

          <div className="h-full md:w-1/2 flex items-center flex-col justify-center">
            <h1 className="text-xl mb-3 font-bold text-start md:text-lg xl:text-2xl">
              {detallesEventosData.data.title}
            </h1>
            <p className="text-base font-normal leading-6 text-start xl:leading-7">
              {detallesEventosData.data.description}
            </p>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

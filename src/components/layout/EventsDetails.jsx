import React from "react";
import detallesEventosData from "../../utils/mock/detallesEventosData";

export default function EventsDetails() {
  return (
    <>
      {detallesEventosData.active ? (
        <section className=" w-[90%] xl:w-[80%] h-auto xl:h-auto flex justify-between items-center gap-y-5 flex-col p-2 xl:p-3 rounded-lg  mx-auto md:flex-row md:gap-x-5 lg:h-full lg:mt-16  overflow-hidden">
          <div className="overflow-hidden md:w-1/2">
            <img
              src={detallesEventosData.data.image}
              alt="eventos"
              className=" mx-auto w-full h-full md:h-[100vh] xl:h-[75vh] object-fill object-center"
            />
          </div>

          <div className="overflow-hidden md:w-1/2 flex items-center flex-col justify-center">
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

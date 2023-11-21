import React from "react";

export default function SedesEvents( {data} ) {
  return (
    <>
      <section className="w-full h-auto">
        <h1 className="text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px] text-center  ">
          Eventos
        </h1>
        <div className="flex justify-center items-center gap-y-10 xl:gap-x-10 flex-col xl:flex-row py-5">
          <div className="w-full h-full xl:h-full xl:w-1/2">
            <img
              src={data.image}
              alt="photo"
              className="w-7xl xl:w-full h-[60vh] xl:h-[75vh] object-fill object-center mx-auto"
            />
          </div>
          <span className="w-full xl:w-1/2">
            <h2 className="text-2xl mb-3 font-bold text-center xl:text-start md:text-3xl xl:text-4xl">
              {data.title}
            </h2>
            <p className="text-lg font-normal leading-6 text-center xl:text-start xl:leading-8">
              {data.description}
            </p>
          </span>
        </div>
      </section>
    </>
  );
}

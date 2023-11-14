import React from "react";
import detallesSaiaData from "../../utils/mock/detallesSaiaData";
import { NavLink as Link } from "react-router-dom";

export default function SaiaDetails() {
  return (
    <>
      <div className="w-[90%] h-full mx-auto py-10">
        {detallesSaiaData.data ? (
          <section className="w-full h-full flex justify-center items-start  gap-y-6 flex-col p-2 rounded-lg  mx-auto xl:flex-row-reverse xl:gap-x-5 xl:mt-10 mb-0">
            <div className="overflow-hidden h-auto mx-auto ">
              <img
                src={detallesSaiaData.image}
                alt="eventos"
                className=" mx-auto w-full min-h-[60vh] object-fill object-center"
              />
            </div>
            <div className="h-full xl:w-1/2 flex items-center flex-col justify-start">
              <span className="w-full flex flex-row items-center gap-x-10 mb-5">
                <Link to={"/"}>
                  <img
                    src="\images\carreras\arrows\arrow-left.png"
                    alt="arrow"
                    className="w-14 h-10"
                  />
                </Link>
                <h1 className="text-xl mb-2 font-bold text-start md:text-2xl xl:text-4xl">
                  {detallesSaiaData.title}
                </h1>
                
              </span>

              <p className="lg:text-lg mb-4">
                  {detallesSaiaData.description}
                </p>

              {detallesSaiaData.data.map((text) => (
                <span key={text.id}>
                  <h2 className="font-semibold lg:text-lg">{text.title}</h2>
                  <p className="lg:text-lg mb-4">{text.description}</p>
                </span>
              ))}
            </div>
          </section>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

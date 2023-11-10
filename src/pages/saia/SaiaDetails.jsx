import React from "react";
import detallesSaiaData from "../../utils/mock/detallesSaiaData";
import { NavLink as Link } from "react-router-dom";

export default function SaiaDetails() {
  return (
    <>
      <div className="w-[80%] h-full mx-auto py-10">
        {detallesSaiaData.data ? (
          <section className="w-full h-full flex justify-center items-center gap-y-6 flex-col p-2 rounded-lg  mx-auto lg:flex-row-reverse md:gap-x-5  lg:mt-10 mb-0">
            <div className="overflow-hidden h-full ">
              <img
                src={detallesSaiaData.image}
                alt="eventos"
                className=" mx-auto w-full h-full object-contain object-center"
              />
            </div>
            <div className="h-full md:w-full lg:w-[50%] flex items-center flex-col justify-start">
              <span className="w-full flex flex-row items-center gap-x-10 mb-5">
                <Link to={"/"}>
                  <img
                    src="\images\carreras\arrows\arrow-left.png"
                    alt="arrow"
                    className="w-14"
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

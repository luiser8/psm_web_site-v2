import React from "react";
import detallesEventosData from "../../utils/mock/detallesEventosData";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";

export default function EventsPrincipal() {
  return (
    <>
      {detallesEventosData.active ? (
        <section className="w-full h-full mt-5 md:mt-16">
          <SectionTitle title="Eventos" paragraph="Ponencias" center />
          <div className=" w-[90%] xl:w-[80%] h-full  flex justify-center items-center gap-y-6 flex-col p-2  xl:p-3 rounded-lg  mx-auto md:flex-row md:gap-x-24">
            <div className=" mb-5 h-full md:w-1/2 overflow-hidden">
              <img
                src={detallesEventosData.image}
                alt="eventos"
                className=" mx-auto w-full h-full object-cover object-center"
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
                <Link
                  to={"/eventos"}
                  className={"mt-5 font-semibold text-lg md:text-2xl"}
                >
                  Ver más eventos
                </Link>
              </span>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

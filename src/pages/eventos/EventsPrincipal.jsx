import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";
import eventosData from "../../utils/mock/principalData/eventosData";

export default function EventsPrincipal() {
  const eventPrincipal = eventosData.eventos_data.find((x) => x.active === true);

  return (
    <>
      {eventosData.active ? (
        <section className="w-full h-full mt-5 xl:mt-16 dark:bg-dark">
          <div className="container">
          <SectionTitle title="Eventos" paragraph="" center />
          <div className="w-full h-full flex justify-center items-center gap-y-6 flex-col p-2 xl:p-0 rounded-lg mx-auto xl:flex-row md:gap-x-24">
            <div className="mb-5 h-full w-full xl:h-[80vh] xl:w-1/2 overflow-hidden">
              <img
                src={eventPrincipal.image}
                alt="eventos"
                className=" mx-auto w-full h-full sm:w-[70%] xl:w-full object-fill object-center"
              />
            </div>

            <div className="h-full xl:w-1/2 flex items-center flex-col justify-center">
              <h1 className="text-xl mb-3 font-bold text-start md:text-lg xl:text-2xl">
                {eventPrincipal.name}
              </h1>
              <span className="text-base font-normal leading-6 text-justify xl:leading-8">
                {eventPrincipal.description.map((detail, index) => (
                  <p className="my-2" key={index}>
                    {detail.description}
                  </p>
                ))}
                <Link to={"/eventos"} className={"mt-5 font-semibold text-lg hover:text-primary transition-all ease-linear"}>
                  Ver más eventos
                </Link>
              </span>
            </div>
          </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

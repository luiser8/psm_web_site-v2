import React, { useEffect, useState } from "react";
import eventosData from "../../utils/mock/principalData/eventosData";
import { Link, useParams } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";

export default function EventsDetails() {
  let eventId = useParams();

  const eventData = eventosData.eventos.eventos_data.find(
    (x) => x.id === Number(eventId.id)
  );
console.log("por aqui", eventData)
  return (
    <>
      <div className="bg-white py-24 sm:py-32 dark:bg-dark mx-auto flex">
        {eventData.active ? (
          <section className="w-full h-full max-w-7xl mx-auto bg-white dark:bg-dark mt-20">
            <div className="grid max-w-2xl grid-cols-1 gap-y-12 gap-x-8 lg:max-w-7xl lg:grid-cols-2 px-6 lg:px-8 mx-auto">
              <div className="mb-5 h-full w-full overflow-hidden">
                <img
                  src={eventData?.image}
                  alt="eventos"
                  className=" mx-auto w-full h-[78vh] object-fill object-center rounded-lg"
                />
              </div>

              {Object.keys(eventData).length !== 0 ? (
                <>
                  <div className="h-full flex items-start flex-col justify-center ">
                    <SectionTitle
                      title={eventData?.name}
                      paragraph="Ponencias"
                      mb="0"
                    />
                    {eventData?.description.map((item, index) => (
                      <span
                        key={index}
                        className="text-base font-normal leading-6 text-justify xl:leading-8 "
                      >
                        <p className="my-2 flex flex-col">{item.description}</p>
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </section>
        ) : (
          <></>
        )}
      </div>
      <></>
    </>
  );
}

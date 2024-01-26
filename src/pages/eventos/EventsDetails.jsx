import React, { useEffect, useState } from "react";
import eventosData from "../../utils/mock/principalData/eventosData";
import { Link, useParams } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";

export default function EventsDetails() {
  let eventId = useParams();

  const [eventList, setEventList] = useState({});

  const filterEvent = (eventId) => {
    const list = eventosData.eventos_data.find((x) => x.id === eventId);
    setEventList(list);
  };

  useEffect(() => {
    filterEvent(Number(eventId.id));
    return () => {
      setEventList({});
    };
  }, []);

  return (
    <>
      {eventList.length !== 0 ? (
        <div className="w-[90%] mx-auto bg-white sm:py-20 py-20">
          {eventosData.active ? (
            <section className="w-full h-full bg-white dark:bg-dark mt-20">
              
              <div className="h-full flex justify-between items-start flex-col gap-10 p-2 xl:p-3 rounded-lg mx-auto xl:flex-row ">

                <div className="mb-5 h-full w-full overflow-hidden xl:w-1/2">
                  <img
                    src={eventList?.image}
                    alt="eventos"
                    className=" mx-auto w-full h-[78vh] object-fill object-center"
                  />
                </div>

                {Object.keys(eventList).length !== 0 ? (
                  <>
                    <div className="h-full flex items-start flex-col justify-center xl:w-1/2">
                      <SectionTitle
                        title={eventList?.name}
                        paragraph="Ponencias"
                        mb="0"
                      />
                      {eventList?.description.map((item, index) => (
                        <span
                          key={index}
                          className="text-base font-normal leading-6 text-justify xl:leading-8 "
                        >
                          <p className="my-2 flex flex-col">
                            {item.description}
                          </p>
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
      ) : (
        <></>
      )}
    </>
  );
}

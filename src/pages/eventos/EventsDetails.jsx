import React, { useEffect, useState } from "react";
import eventosData from "../../utils/mock/eventosData";
import { Link, useParams } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";

export default function EventsDetails() {
  let eventId = useParams();

  const [eventList, setEventList] = useState({});

  const filterEvent = (eventId) => {
    const list = eventosData.data.filter((x) => x.id === eventId);
    setEventList(list);
  };

  useEffect(() => {
    filterEvent(Number(eventId.id));
  }, []);

  return (
    <>
      {eventosData.active ? (
        <section className="w-full h-full mt-5 md:mt-16">
          <div className="w-[100%] md:w-[80%] flex flex-row-reverse justify-center mx-auto overflow-hidden">
            <SectionTitle
              title={eventList[0]?.name}
              paragraph="Ponencias"
              center
              mb="0"
            />
            <Link to={"/eventos"} className="block ml-5">
              <img
                src="\images\carreras\arrows\arrow-left.png"
                alt="arrow"
                className="w-14"
              />
            </Link>
          </div>
          <div className=" w-[90%] xl:w-[80%] h-full  flex justify-center items-center gap-y-6 flex-col p-2  xl:p-3 rounded-lg  mx-auto md:flex-row md:gap-x-24">
            <div className=" mb-5 h-full md:w-1/2 overflow-hidden">
              <img
                src={eventList[0]?.image}
                alt="eventos"
                className=" mx-auto w-full h-[78vh] object-fill object-center"
              />
            </div>

            <div className="h-full md:w-1/2 flex items-center flex-col justify-center">
              <span className="text-base font-normal leading-6 text-justify xl:leading-8">
                <p className="my2">{eventList[0]?.description}</p>
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

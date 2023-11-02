import React from "react";
import SectionTitle from "../../components/common/SectionTitle";
import eventosData from "../../utils/mock/eventosData";
import { Link } from "react-router-dom";
import SingleEventsDetails from "./SingleEventsDetails";

export default function EventsAll() {
  const otherEvents = eventosData.data.filter((x) => x.active === false);
  return (
    <>
      <section id="eventos" className="bg-primary/5 py-10 w-full mx-auto">
        <div className="container">
          <Link to={"/"}>
            <img
              src="\images\carreras\arrows\arrow-left.png"
              alt="arrow"
              className="w-12 mb-4"
            />
          </Link>
          <SectionTitle
            title="Eventos"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 md:gap-x-6 lg:gap-x-20 xl:grid-cols-3">
            {otherEvents.map((events) => (
              <div key={events.id} className="w-full">
                <SingleEventsDetails events={events} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

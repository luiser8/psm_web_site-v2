import React, { useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import eventosData from "../../utils/mock/eventosData";
import { Link } from "react-router-dom";
import SingleEventsDetails from "./SingleEventsDetails";
import Pagination from "../../components/layout/Pagination";

export default function EventsAll() {
  const eventsPerPage = 6;
  const otherEvents = eventosData.data.filter((x) => x.active === false);
  const [pages, setPages] = useState([...otherEvents].slice(0, eventsPerPage));
  const [currentPage, setCurrentPage] = useState(0);
  const [disable, setDisable] = useState(false);

  const handleNext = () => {
    const totalPages = otherEvents.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * eventsPerPage;

    if (firstIndex === totalPages) return;

    setPages([...otherEvents].splice(firstIndex, eventsPerPage));
    setCurrentPage(nextPage);
  };

  const handlePrev = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;

    const firstIndex = prevPage * eventsPerPage;
    setPages([...otherEvents].splice(firstIndex, eventsPerPage));
    setCurrentPage(prevPage);
  };

  return (
    <div className="bg-white py-20 sm:py-20">
      <section id="eventos" className="bg- dark:bg-dark py-10 w-full mx-auto">
        <div className="container">
          <div className="flex flex-row mb-10 mx-auto">
          <SectionTitle
            title="Eventos"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 md:gap-x-6 lg:gap-x-20 xl:grid-cols-3 justify-center">
            {pages.map((events) => (
              <div key={events.id} className="w-full">
                <SingleEventsDetails events={events} />
              </div>
            ))}
          </div>
        </div>
        <Pagination
          handleNext={handleNext}
          handlePrev={handlePrev}
          currentPage={currentPage}
          disable={disable}
        />
      </section>
    </div>
  );
}

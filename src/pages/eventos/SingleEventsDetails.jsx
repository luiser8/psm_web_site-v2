import React from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleEventsDetails({ events, detail }) {

  const params = useParams()

  return (
    <div className="bg-white py-10 sm:py-10" onClick={()=> console.log(events)}>
      <div className=" border-2 border-gray-500 rounded-lg w-full overflow-hidden hover:border-orange-400 transition-all cursor-pointer">
        <img
          className="lg:h-full md:h-full w-full object-cover object-center"
          src={events.image}
          alt="image"
        />
        <div className="p-5">
          <h1 className="title-font text-start font-bold text-gray-900 mb-3 lg:text-base uppercase dark:text-white">
            {events.name}
          </h1>
          <span className="w-full flex justify-between items-center font-semibold mb-2">
          <p className="leading-relaxed">{events.date}</p>
            <Link to={`/${params.id}/eventos/${events.id}`}>Más detalles</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

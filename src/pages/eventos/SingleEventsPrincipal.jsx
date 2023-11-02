import React from "react";

export default function SingleEventsPrincipal({ events }) {
  return (
    <>
      <div className=" border-2 border-gray-500 rounded-lg w-full overflow-hidden hover:border-orange-400 transition-all cursor-pointer">
        <img
          className="lg:h-full md:h-full w-full object-cover object-center"
          src={events.image}
          alt="image"
        />
        <div className="p-5">
          <h1 className="title-font text-center font-bold text-gray-900 mb-3 lg:text-base uppercase">
            {events.name}
          </h1>
        </div>
      </div>
    </>
  );
}

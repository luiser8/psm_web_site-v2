import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Pagination({ handleNext, handlePrev, currentPage }) {
  const [items, setItems] = useState([
    {
      value: 1,
    },

    {
      value: 2,
    },

    {
      value: 3,
    },

    {
      value: 4,
    },
  ]);

  return (
    <>
      <nav className="flex justify-center mt-6 rounded-md mx-auto">
        <button
          onClick={handlePrev}
          className="relative inline-flex items-center rounded-l-md px-2 py-2 md:py-4 text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div
          className="relative inline-flex items-center px-5 py-2 md:py-4 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          {currentPage + 1}
        </div>

        <button
          onClick={handleNext}
          className="relative inline-flex items-center rounded-r-md px-2 py-2 md:py-4 text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </>
  );
}

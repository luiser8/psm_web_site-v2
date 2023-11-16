import React, { useState } from "react";

export default function ModalVideo({ link, open, handleClose }) {
  return (
    <>
      <div
        className={`${
          open ? "w-full h-auto top-20 z-100 fixed bg-gray-900" : "z-0 hidden"
        }`}
      >
        <iframe
          className=" relative w-full aspect-video h-[89vh] sm:h-[91vh] md:h-[92vh] flex items-center justify-center"
          src={link}
          width="720"
          height="480"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          encrypted-media
          allowfullscreen
        ></iframe>
        <button onClick={handleClose} className="bg-white flex justify-center items-center z-50 absolute p-3 top-20 right-3 rounded-full hover:scale-105 transition-all ease-linear">
        <img src="/images/Icon/close-icon.svg" alt="clse" />
        </button>
      </div>
    </>
  );
}

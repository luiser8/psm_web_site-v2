import React, { useState } from "react";

export default function ModalVideo({ link, open, handleClose }) {
  return (
    <>
      <div
        className={`${
          open ? "w-full h-screen top-0 z-[50] fixed bg-gray-900" : "hidden"
        }`}
      >
        <iframe
          className="w-full aspect-video h-screen flex items-center justify-center"
          src={link}
          width="720"
          height="480"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          encrypted-media
          allowfullscreen
        ></iframe>
        <button onClick={handleClose} className="bg-white flex justify-center items-center absolute p-3 top-3 right-3 rounded-full hover:scale-105 transition-all ease-linear">
        <img src="/images/Icon/close-icon.svg" alt="clse" />
        </button>
      </div>
    </>
  );
}

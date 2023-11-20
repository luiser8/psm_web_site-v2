import React from "react";
import { NavLink } from "react-router-dom";

export default function SedesContact() {
  return (
    <>
      <footer className="w-full h-full bg-[#4A6CF7] bg-opacity-5 flex justify-center overflow-hidden relative -bottom-1 mt-10 items-start xl:items-center px-10 gap-x-4 py-5 flex-col xl:flex-row">
        <h1 className="text-xl text-black font-bold flex flex-nowrap gap-x-1">
          <img src="/images/Icon/address.svg" alt="address" /> Dirección
        </h1>
        <h2 className="text-gray-500 text-base">
          26985 Brighton Lane, Lake Forest, CA 92630
        </h2>

        <h1 className="text-xl text-black font-bold flex flex-nowrap gap-x-1">
          <img src="/images/Icon/email.svg" alt="email" /> Email
        </h1>
        <h2 className="text-gray-500 text-base">example@email.com</h2>

        <h1 className="text-xl text-black font-bold flex flex-nowrap gap-x-1">
          <img src="/images/Icon/phone.svg" alt="phone" className="rotate-90" />{" "}
          Telefono
        </h1>
        <h2 className="text-gray-500 text-base">123-456-7890</h2>
      </footer>
    </>
  );
}

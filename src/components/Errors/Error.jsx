import React from "react";
import { NavLink as Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="w-full flex flex-col h-screen justify-center items-center px-8">
        <span className="mb-4">
          <h1 className="text-black font-bold text-3xl md:text-5xl text-center mb-4 whitespace-nowrap">
            Página no encontrada
          </h1>
          <h2 className="text-body-color font-medium text-center text-lg md:text-xl mb-4">
          Lo sentimos, no pudimos encontrar la página que estás buscando.
          </h2>
        </span>

        <div className="flex justify-center  md:flex-row md:gap-x-3">
          <Link to={"/"}>
            <button className="px-5 py-4 md:px-4 md:py-3 rounded-full bg-primary text-white font-medium">
            Regresar 
            </button>
          </Link>
          <button className="px-5 py-4 md:px-4 md:py-3 rounded-full text-primary font-semibold">
            Contactar a soporte
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;

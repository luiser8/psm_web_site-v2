import React from "react";
import sedeBarcelonaData from "../../utils/mock/sedesExtensionesData/sedeBarcelonaData";
import { useParams } from "react-router-dom";
import sedesData from "../../utils/mock/principalData/sedesData";

export const SedesContact = () => {
  const sedeURL = useParams();
  const getDataSedesExtensiones = sedesData.find((x) => x.link === sedeURL.id);
  const data = getDataSedesExtensiones.data.contacto;
  return (
    <>
      {data.active ? (
        <section className="w-full py-40 bg-white flex justify-start items-center flex-col px-5 lg:px-10">
          <h2 className="text-3xl lg:text-5xl font-bold mb-3 text-center">
            {data.title}
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg text-center">
            {data.descripcion}
          </p>
          <div className="w-full xl:w-[70%] grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 grid-rows-1 mt-10 justify-center items-center place-content-center gap-10 overflow-hidden">
            <div className=" h-36 p-5 bg-gray-50 rounded-lg flex justify-center items-start flex-col">
              <h2 className="text-lg xl:text-xl font-semibold">Correo</h2>
              <h3 className="text-base font-normal">
                {data.contacto_data.correo}
              </h3>
            </div>

            <div className=" h-36 p-5 bg-gray-50 rounded-lg flex justify-center items-start flex-col">
              <h2 className="text-lg xl:text-xl font-semibold">Teléfonos</h2>
              <h3 className="text-base font-normal">
                {data.contacto_data.telefono}
              </h3>
            </div>

            <div className=" h-36 p-5 bg-gray-50 rounded-lg flex justify-center items-start flex-col">
              <h2 className="text-lg xl:text-xl font-semibold">Dirección</h2>
              <h3 className="text-base font-normal">
                {data.contacto_data.direccion}
              </h3>
            </div>

            <div className=" h-36 p-5 bg-gray-50 rounded-lg flex justify-center items-start flex-col">
              <h2 className="text-lg xl:text-xl font-semibold">
                Redes Sociales
              </h2>
              <h3 className="text-base font-normal">
                <a href={data.contacto_data.redes.facebook} target="_blank">Link Facebook</a>
              </h3>
              <h3 className="text-base font-normal">
                <a href={data.contacto_data.redes.instagram} target="_blank">Link Instagram</a>
              </h3>
              {data.contacto_data.redes.x !== undefined ? <h3 className="text-base font-normal">
                <a href={data.contacto_data.redes.x} target="_blank">Link X (Twitter)</a>
              </h3> : <></>}
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

import React, { useState } from "react";
import sedesDetailsData from "../../utils/mock/sedesDetailsData";
import sedesData from "../../utils/mock/sedesData";
import { Link, useParams } from "react-router-dom";
import SedesEvents from "./SedesEvents";
import SedesCarreras from "./SedesCarreras";
import Testimonials from "../testimonials/Testimonials";
import Registrations from "./Registrations";
import SedesNews from "./SedesNews";
import Footer from "../../components/layout/Footer";

export default function SedesPage() {
  const sedeURL = useParams();

  const getDataSedes = sedesData.data.find((x) => x.link === sedeURL.id);

  const carreras = getDataSedes.data.data.carreras;
  const testimonios = getDataSedes.data.data.testimonios;
  const inscripciones = getDataSedes.data.data.inscripciones;
  const noticias = getDataSedes.data.data.noticias;
  const eventos = getDataSedes.data.data.eventos;

  return (
    <div className="bg-white py-20 sm:py-20 mt-8">
      {sedesData.active ? (
        <section className="flex flex-col items-center w-full h-full mb-0 dark:bg-dark">
          <img
            src={getDataSedes.data.data.image}
            alt={`sede_${getDataSedes.data.data.title}`}
            className="w-full h-[50vh] xl:h-[65vh] object-fill object-center"
          />

          {eventos.map((data) => (
            <div className="container my-20" key={data.id}>
              <SedesEvents data={data} />
            </div>
          ))}
        </section>
      ) : (
        <></>
      )}

      <section className="w-full h-full overflow-hidden mt-0 dark:bg-dark">
        <SedesCarreras data={carreras} />
        <Testimonials data={testimonios} />
        <Registrations data={inscripciones} />
        <SedesNews data={noticias} />
      </section>
    </div>
  );
}

import React from "react";
import sedesData from "../../utils/mock/sedesData";
import { useParams } from "react-router-dom";
import SedesEvents from "./SedesEvents";
import SedesCarreras from "./SedesCarreras";
import SedesTestimonials from "./SedesTestimonials";
import Registrations from "./Registrations";
import SedesNews from "./SedesNews";
import Footer from "../../components/layout/Footer";
import { CarouselWithContent } from "../../components/common/Carousel";

export default function SedesPage() {
  const sedeURL = useParams();

  const getDataSedes = sedesData.find((x) => x.link === sedeURL.id);

  const carreras = getDataSedes.data.carreras;
  const testimonios = getDataSedes.data.testimonios;
  const inscripciones = getDataSedes.data.inscripciones;
  const noticias = getDataSedes.data.noticias;
  const eventos = getDataSedes.data.eventos.eventos_data;

  return (
    <div className="bg-white py-20 sm:py-20 mt-8">
      {getDataSedes.data.active ? (
        <section className="flex flex-col items-center w-full h-full mb-0 dark:bg-dark">

          {getDataSedes.data.carousel.active ? (
            <CarouselWithContent data={getDataSedes.data.carousel.carousel_data} />
          ) : (
            <div className="container">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 py-16">
                  <div
                    className="wow fadeInUp mx-auto max-w-[800px] text-center"
                    data-wow-delay=".2s"
                  >
                    <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                      {getDataSedes.data.carousel.title}
                    </h1>
                    <p className="mb-5 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                      {getDataSedes.data.carousel.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
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
        <SedesTestimonials data={testimonios} />
        <Registrations data={inscripciones} />
        <SedesNews data={noticias} />
      </section>
    </div>
  );
}

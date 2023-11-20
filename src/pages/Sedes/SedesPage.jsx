import React, { useState } from "react";
import sedesDetailsData from "../../utils/mock/sedesDetailsData/sedesDetailsData";
import { Link, useParams } from "react-router-dom";
import SedesEvents from "./SedesEvents";
import SedesCarreras from "./SedesCarreras";
import Testimonials from "../Testimonials";
import Registrations from "./Registrations";
import SedesContact from "./SedesContact";
import SedesNews from "./SedesNews";
import Footer from "../../components/layout/Footer";

export default function SedesPage() {
  const sedeURL = useParams();

  const sedesFilter = sedesDetailsData.sedes.find(
    (x) => x.parameters === sedeURL.id
  );

  return (
    <>
      {sedesDetailsData.active ? (
        <section className="flex flex-col items-center w-full h-full mb-20">
          <nav className="w-full h-16 xl:h-24 flex flex-row items-center justify-between px-5">
            <Link to={"/"}>
              <img
                src="\images\carreras\arrows\arrow-left.png"
                alt="arrow"
                className="w-14 mb-4"
              />
            </Link>
            <h1 className={
              "font-semibold text-lg md:text-xl uppercase"
            }>
              {sedeURL.id === "san_cristobal"
                ? "San Cristóbal"
                : sedeURL.id === "ciudad_ojeda"
                ? "Ciudad Ojeda"
                : sedeURL.id === "puerto_ordaz"
                ? "Puerto Ordaz"
                : sedeURL.id}
            </h1>
          </nav>

          <img
            src={sedesFilter.image}
            alt={`sede_${sedesFilter.title}`}
            className="w-full h-[50vh] xl:h-[65vh] object-fill object-center"
          />

          {sedesFilter.events.map((data) => (
            <div className="container my-20" key={data.id}>
              <SedesEvents data={data} />
            </div>
          ))}
        </section>
      ) : (
        <></>
      )}

      <section className="w-full h-full overflow-hidden mt-20">
        <SedesCarreras />
        <Testimonials />
        <Registrations data={sedesFilter.registrations} />
        <SedesNews />
        <Footer name={sedesFilter.title} />
      </section>
    </>
  );
}

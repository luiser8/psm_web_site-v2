import React, { useState } from "react";
import sedesDetailsData from "../../utils/mock/sedesDetailsData";
import { Link, useParams } from "react-router-dom";
import SedesEvents from "./SedesEvents";
import SedesCarreras from "./SedesCarreras";
import Testimonials from "../testimonials/Testimonials";
import Registrations from "./Registrations";
import SedesNews from "./SedesNews";
import Footer from "../../components/layout/Footer";

export default function SedesPage() {
  const sedeURL = useParams();

  const sedesFilter = sedesDetailsData.sedes.find(
    (x) => x.parameters === sedeURL.id
  );

  return (
    <div className="bg-white py-20 sm:py-20 mt-8">
      {sedesDetailsData.active ? (
        <section className="flex flex-col items-center w-full h-full mb-0 dark:bg-dark">
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

      <section className="w-full h-full overflow-hidden mt-0 dark:bg-dark">
        <SedesCarreras />
        <Testimonials />
        <Registrations data={sedesFilter.registrations} />
        <SedesNews />
      </section>
    </div>
  );
}

import React from "react";
import MaracaiboData from "../../utils/mock/sedesDetailsData/MaracaiboData";
import { Link, useParams } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";
import SedesEvents from "./SedesEvents";
import SedesCarreras from "./SedesCarreras";
import Testimonials from "../Testimonials";
import News from "../noticias/News";
import Registrations from "./Registrations";
import SedesContact from "./SedesContact";
import SedesNews from "./SedesNews";

export default function SedesPage({ data }) {
  const sedeURL = useParams();

  return (
    <>
      {MaracaiboData.active ? (
        <section className="flex flex-col items-center w-full h-full mb-20">
          <nav className="w-full h-16 xl:h-24 flex flex-row items-center justify-between px-5">
            <Link to={"/"}>
              <img
                src="\images\carreras\arrows\arrow-left.png"
                alt="arrow"
                className="w-14 mb-4"
              />
            </Link>
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold !leading-tight text-black dark:text-white uppercase">
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
            src={MaracaiboData.image}
            alt={`sede_${MaracaiboData.title}`}
            className="w-full h-[50vh] xl:h-[65vh] object-fill object-center"
          />

          {MaracaiboData.events.map((data) => (
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
        <SedesNews />
        <Registrations data={MaracaiboData.registrations} />
        <SedesContact />
      </section>
    </>
  );
}

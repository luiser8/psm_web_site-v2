import React from "react";
import MaracaiboData from "../../utils/mock/sedesDetailsData/MaracaiboData";
import { Link, useParams } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";
import SedesEvents from "./SedesEvents";
import SedesCarreras from "./SedesCarreras";
import Testimonials from "../Testimonials";

export default function SedesPage({ data }) {
  const sedeName = useParams();

  return (
    <>
      {MaracaiboData.active ? (
        <section className="flex flex-col items-center w-full h-full">
          <nav className="w-full h-16 xl:h-24 flex flex-row items-center justify-between px-5">
            <Link to={"/"}>
                <img
                  src="\images\carreras\arrows\arrow-left.png"
                  alt="arrow"
                  className="w-14 mb-4"
                />
              </Link>
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold !leading-tight text-black dark:text-white">
              {sedeName.id.toUpperCase()}
            </h1>
          </nav>

          <img
            src={MaracaiboData.image} 
            alt={`sede_${MaracaiboData.title}`}
            className="w-full h-[50vh] xl:h-[65vh] object-fill object-center"
          />

          {MaracaiboData.events.map((data) => (
            <div className="container mt-10" key={data.id}>
              <SedesEvents data={data} />
            </div>
          ))}
        </section>
      ) : (
        <></>
      )}
      <SedesCarreras />
      <Testimonials/>
    </>
  );
}

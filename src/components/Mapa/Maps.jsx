import React from "react";
import { motion } from "framer-motion";
import MapaData from "../../utils/mock/MapaData";
import { NavLink } from "react-router-dom";

export default function Maps() {
  return (
    <>
      {MapaData.active ? (
        <div
          className="w-[100%] mt-36 h-full mx-auto flex flex-col text-center justify-center overflow-hidden shadow-lg"
          dangerouslySetInnerHTML={{
            __html: 
               `<iframe
               src=${MapaData.link} 
               width=${MapaData.width}
               height=${MapaData.height}
               scrolling=${MapaData.scrolling}
               />`,
          }}
        >
          {/* <iframe
            width={MapaData.width}
            height={MapaData.height}
            scrolling={MapaData.scrolling}
            src="https://maps.google.es/maps/ms?ie=UTF8&amp;hl=es-419&amp;oe=UTF8&amp;msa=0&amp;msid=202280427449831017393.0004ccaf6e66638aecf2c&amp;t=m&amp;ll=8.733077,-67.214355&amp;spn=10.410586,14.0625&amp;z=6&amp;output=embed"
          ></iframe> */}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

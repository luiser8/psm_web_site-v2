import React, { useState, useEffect } from "react";
import carrerasData from "../../utils/mock/carrerasData";
import { useParams } from "react-router-dom";
import { NavLink as Link } from "react-router-dom";

const DetallesCarrera = () => {
  let carreraId = useParams();
  const [carrerasList, setCarrerasList] = useState([]);
  const filterCarrera = (id) => {
    const list = carrerasData.data.filter((x) => x.detail === id);
    setCarrerasList(list);
  };

  useEffect(() => {
    filterCarrera(carreraId.id);
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-dark">
      {carrerasList.length !== 0 ? (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-12 gap-x-8 lg:max-w-7xl lg:grid-cols-2">
            <div className="w-auto mx-auto lg:items-start items-center">
              <Link to={"/"}>
                <img
                  src="\images\carreras\arrows\arrow-left.png"
                  alt="arrow"
                  className="w-14 mb-4 dark:bg-white rounded-full"
                />
              </Link>
              <h2 className="text-3xl sm:text-4xl font-medium text-black-100 leading-relaxed dark:text-white">
                {carrerasList[0].name}
              </h2>
              <p className="mt-2 leading-relaxed">
                {carrerasList[0].full_description}
              </p>
            </div>
            <div className="w-full rounded-lg overflow-hidden">
              <img
                className="object-cover object-center h-full w-full"
                src={carrerasList[0].image}
                alt="image"
              />
            </div>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-medium leading-6 text-gray-900 group-hover:text-gray-600">
                  <a className="dark:text-white">
                    <span className="absolute inset-0 " />
                    Perfil Graduado
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3 dark:text-white">
                  {carrerasList[0].more.graduate_profile}
                </p>
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-medium leading-6 text-gray-900 group-hover:text-gray-600">
                  <a className="dark:text-white">
                    <span className="absolute inset-0" />
                    Campo Laboral
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3 dark:text-white">
                  {carrerasList[0].more.labor_field}
                </p>
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-sm font-medium leading-6 text-gray-900 group-hover:text-gray-600">
                  <a className="dark:text-white">
                    <span className="absolute inset-0" />
                    Carreras Afines
                  </a>
                </h3>
                <ul>
                  {carrerasList[0].more.related_careers.map((x, index) => (
                    <li key={index}>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="group relative">
                <div className="flex w-0 flex-1 items-center">
                  <span className="w-0 flex-1 truncate dark:text-white">
                    {carrerasList[0].more.pensum}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  <a className="cursor-pointer font-medium">
                    Descargar Pensum de Estudio
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DetallesCarrera;

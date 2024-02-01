import React, { useState, useEffect } from "react";
import carrerasData from "../../utils/mock/principalData/carrerasData";
import { useLocation, useParams } from "react-router-dom";
import { NavLink as Link } from "react-router-dom";

const DetallesCarrera = () => {
  let carreraId = useParams();
  const location = useLocation();
  const [carrerasList, setCarrerasList] = useState([]);
  const filterCarrera = (id) => {
    const list = carrerasData.data.filter((x) => x.detail === id);
    setCarrerasList(list);
  };

  useEffect(() => {
    filterCarrera(carreraId.id);
  }, []);

  const locationCarrera = carrerasList[0]?.more.location;

  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-dark">
      {carrerasList.length !== 0 ? (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-12 gap-x-8 lg:max-w-7xl lg:grid-cols-2">
            <div className="w-auto mx-auto lg:items-start items-center">
              {/* mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start */}
              <h2 className="text-3xl sm:text-4xl font-medium text-black-100 leading-relaxed dark:text-white first-letter:text-7xl">
                {carrerasList[0].name}
              </h2>
              <p className="indent-4 mt-2 leading-relaxed">
                {carrerasList[0].paragraph1}
              </p>
              <p className="indent-4 mt-2 leading-relaxed">
                {carrerasList[0].paragraph2}
              </p>
              <p className="indent-4 mt-2 leading-relaxed">
                {carrerasList[0].paragraph3}
              </p>
              <p className="indent-4 mt-2 leading-relaxed">
                {carrerasList[0].paragraph4}
              </p>
              <p className="indent-4 mt-2 leading-relaxed">
                {carrerasList[0].paragraph5}
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

          {location.pathname.includes("nacional") ? (
            <article className="flex w-full flex-col items-start justify-between">
              <div className="group relative mb-2">
                <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">
                  <a className="dark:text-white">
                    Esta especialidad puedes estudiarla en las siguientes sedes
                    o extensiones:
                  </a>
                </h3>
                <div className="mt-2 text-sm leading-6 text-gray-600 dark:text-white flex flex-wrap gap-x-3 ">
                  {locationCarrera.map((item) => (
                    <Link key={item.id} to={item.link} className={"hover:text-primary"}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ) : null}

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
                  <a arget="_blank" href={carrerasList[0].more.pensum} className="cursor-pointer font-medium">
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

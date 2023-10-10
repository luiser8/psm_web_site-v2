import React from "react";
import detallesEventosData from "../../utils/mock/detallesEventosData";

export default function EventsDetails() {
  return (
    <>
      {detallesEventosData.active ? (
        <section className="mt-10  w-[90%] xl:w-[80%] h-full  flex justify-center items-center gap-y-6 flex-col p-2  xl:p-3 rounded-lg  mx-auto md:flex-row md:gap-x-24  lg:mt-10  ">
          <div className=" mb-5 overflow-hidden h-screen md:w-1/2 ">
            <img
              src={detallesEventosData.data.image}
              alt="eventos"
              className=" mx-auto w-full h-full object-fill object-center"
            />
          </div>

          <div className="h-full md:w-1/2 flex items-center flex-col justify-center">
            <h1 className="text-xl mb-3 font-bold text-start md:text-lg xl:text-2xl">
              {detallesEventosData.data.title}
            </h1>
            <span className="text-base font-normal leading-6 text-justify xl:leading-8">
              <p className="my-2">
                "El Politécnico Santiago Mariño (PSM) en conjunto con el Centro
                de Investigaciones Científicas, Sociales y Tecnológicas del Perú
                (CICSTEP) se unen para ofrecer a toda la comunidad proyectista,
                tecnológica, cientifica y humanística, un intercambio de
                conocimientos y experiencias a través de un congreso
                internacional, donde se unirán países como; Venezuela, Perú,
                Colombia, Costa Rica y Panamá.
              </p>
             
              <p className="my-2">
                Siendo así, una gran oportunidad de aprendizaje adaptado a los
                temas de Sostenibilidad Económica, Social y de Medio Ambiente,
                que se realizará desde el próximo 21 de septiembre de 2023,
                desde las 8.00a.m.
              </p>{" "}
             
              <p className="my-2">
                Un evento donde se podrá disfrutar de charlas, exposiciones y
                networking con un robusto grupo de expertos que se unirán en pro
                de brindar sus aportes a las generaciones futuras.
                No dejes pasar esta oportunidad única de aprender y de
                compartir.
              </p>
             
              <p className="my-2">
                Todas las transmisiones serán totalmente en vivo, a través de
                nuestra página web, y las Plataformas SAIA, YouTube y Teams, de
                manera gratuita.
              </p>{" "}
             
              <p className="my-2">
                Mantente atento(a) a nuestras publicaciones, para mayor
                información. ¡Somos PSM, Somos Tecnología, Somos Formación para
                la Excelencia!"
              </p>
            </span>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

import React from "react";
import QuienesSomosData from "../../utils/mock/quienesSomos";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";

export default function QuienesSomos() {
  return (
    <>
      {QuienesSomosData.active ? (
        // <section className="w-full h-screen dark:bg-dark">
        // <div className="w-[90%] xl:w-[80%] h-full  overflow-hidden py-20 mx-auto ">
        //   <header className="py-4 w-full text-start mx-auto flex flex-row gap-x-12 items-center">
        //   <Link to={"/"}>
        //     <img
        //       src="\images\carreras\arrows\arrow-left.png"
        //       alt="arrow"
        //       className="w-12 dark:bg-white rounded-full"
        //     />
        //   </Link>
        //     <h2 className="text-3xl lg:text-5xl font-bold">
        //       {AboutData.data.name}
        //     </h2>
        //   </header>
        //   <main className="flex gap-y-5 lg:gap-x-5 justify-center items-center content-center flex-col py-8 lg:flex-row">
        //     <div class="lg:max-w-[570px] w-full">
        //       <img src={AboutData.data.image} alt="about" class="w-full" />
        //     </div>
        //     {/* <div className="w-full h-full">
        //       <img
        //         src={AboutData.data.image}
        //         alt="acerca"
        //         className="object-fill object-center h-72 w-full lg:h-[50vh]  rounded-md"
        //       />
        //     </div> */}
        //     <span className="text-start lg:w-[70%]">
        //       <h2 className="font-bold text-3xl lg:text-3xl mb-3">
        //         {AboutData.data.title}
        //       </h2>
        //       <h3>
        //         <h2 className="font-semibold text-gray-500 mb-3 lg:text-lg dark:text-white">
        //           {AboutData.data.subtitle}
        //         </h2>
        //       </h3>
        //       <p className="font-normal lg:text-lg text-justify">
        //         {AboutData.data.description}
        //       </p>
        //     </span>
        //   </main>
        // </div>
        // </section>
        <section className="w-full h-full dark:bg-dark">
          <div className="w-[90%] xl:w-[80%] h-full overflow-hidden py-20 mx-auto">
            <header className="py-4 w-full text-start mx-auto flex flex-row gap-x-12 lg:gap-x-5 items-center">
              <Link to={"/"}>
                <img
                  src="\images\carreras\arrows\arrow-left.png"
                  alt="arrow"
                  className="w-12 dark:bg-white rounded-full"
                />
              </Link>
              <h2 className="text-3xl lg:text-5xl font-bold">
                {QuienesSomosData.data.name}
              </h2>
            </header>
            <section className="overflow-hidden pt-39 pb-17.5">
              <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
                <div className="flex flex-col lg:flex-row items-center gap-7.5 xl:gap-14">
                  <div className="lg:max-w-[490px] w-full">
                    <img src={QuienesSomosData.data.image} alt="Sede Barcelona" className="w-full rounded" />
                  </div>
                  <div className="lg:max-w-[570px] w-full">
                    <h1 className="text-3xl lg:text-2xl font-bold text-heading-6 sm:text-heading-4 lg:text-heading-3 text-dark mb-5">
                      {QuienesSomosData.data.about_us.title}
                    </h1>
                    <p className="mt-4.5">
                      {QuienesSomosData.data.about_us.description1}
                    </p>
                    <p className="mt-4.5">
                      {QuienesSomosData.data.about_us.description2}
                    </p>
                    <p className="mt-4.5">
                      {QuienesSomosData.data.about_us.description3}
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="pb-15">
              <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
                <div className="flex flex-wrap items-center justify-between gap-8 mb-6">
                  <h1 className="text-3xl lg:text-2xl font-semibold text-heading-5 text-dark">{QuienesSomosData.data.additional_data.mission_and_vision.title}</h1>
                  <div className="w-full">
                    <h2 className="font-bold text-heading-6 sm:text-heading-4 lg:text-heading-3 text-dark mb-2">
                      {QuienesSomosData.data.additional_data.mission_and_vision.subtitle1}
                    </h2>
                    <p className="mt-4.5">
                      {QuienesSomosData.data.additional_data.mission_and_vision.description1}
                    </p>
                  </div>
                  <div className="w-full">
                    <h2 className="font-bold text-heading-6 sm:text-heading-4 lg:text-heading-3 text-dark mb-2">
                      {QuienesSomosData.data.additional_data.mission_and_vision.subtitle2}
                    </h2>
                    <p className="mt-4.5">
                      {QuienesSomosData.data.additional_data.mission_and_vision.description2}
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">

                <h2 className="text-3xl lg:text-2xl font-semibold text-heading-5 text-dark">{QuienesSomosData.data.additional_data.authorities.title}</h2>
                <div className="pt-14">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-7.5">

                    {QuienesSomosData.data.additional_data.authorities.data.map((item, key) => (
                      <div key={key} className="group">
                        <div className="rounded-[20px] bg-gray p-5 group-hover:bg-white group-hover:drop-shadow-1 group-hover:-translate-y-2 transition-all">
                          <div className="flex flex-wrap items-center gap-8">
                            <div className="w-25 h-25 rounded-full overflow-hidden">
                              <img src={item.photo} alt="user" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-custom-xl text-dark mb-1">
                                {item.names}
                              </h4>
                              <p>{item.position}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

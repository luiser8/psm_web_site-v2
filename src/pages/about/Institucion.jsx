import React from 'react'
import AccordionCustom from '../../components/common/AccordionCustom';
import AboutData from "../../utils/mock/aboutData";
import { Link } from 'react-router-dom';

const Institucion = () => {
  return (
    <>
      {AboutData.active ? (
        <section className="w-full h-full dark:bg-dark">
          <div className="w-[90%] xl:w-[80%] h-full  overflow-hidden py-20 mx-auto ">
            <header className="py-4 w-full text-start mx-auto flex flex-row gap-x-12 items-center">
              <Link to={"/"}>
                <img
                  src="\images\carreras\arrows\arrow-left.png"
                  alt="arrow"
                  className="w-12 dark:bg-white rounded-full"
                />
              </Link>
              <h2 className="text-3xl lg:text-5xl font-bold">
                {AboutData.data.name}
              </h2>
            </header>
            <main className="flex gap-y-5 lg:gap-x-5 justify-center items-center content-center flex-col py-8 lg:flex-row">
              <section className="overflow-hidden pt-39 pb-17.5">
                <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
                  <div className="flex flex-col lg:flex-row items-center gap-7.5 xl:gap-14">
                    <div className="lg:max-w-[490px] w-[40%]">
                      <img src={AboutData.data.image} alt="Sede Barcelona" className="w-full rounded" />
                    </div>
                    <div className="lg:max-w-[570px] w-full">
                      <h1 className="text-3xl lg:text-2xl font-bold text-heading-6 sm:text-heading-4 lg:text-heading-3 text-dark mb-5">
                        {AboutData.data.additional_data[0].title}
                      </h1>
                      <p>
                        {AboutData.data.additional_data[0].description1}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <section className="pb-10">
              <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
                <div className="flex flex-wrap items-center justify-between gap-8 mb-2">
                  <AccordionCustom data={AboutData.data.additional_data}/>
                </div>
              </div>
            </section>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  )
}

export default Institucion;
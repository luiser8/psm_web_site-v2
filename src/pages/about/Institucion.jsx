import React from 'react'
import AccordionCustom from '../../components/common/AccordionCustom';
import AboutData from "../../utils/mock/principalData/aboutData";
import { Link } from 'react-router-dom';

const Institucion = () => {
  return (
    <div className="bg-white py-20 sm:py-20">
      {AboutData.active ? (
        <section className="w-full h-full dark:bg-dark">
          <div className="w-[90%] xl:w-[80%] h-full  overflow-hidden py-20 mx-auto ">
            <header className="py-4 w-full justify-center mx-auto flex flex-row gap-x-12 items-center">
              <h2 className="text-3xl lg:text-5xl font-bold">
                {AboutData.data.name}
              </h2>
            </header>
            <section className="pb-10 pt-10">
              <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
                <div className="flex flex-wrap items-center justify-between gap-8 mb-2">
                  <AccordionCustom data={AboutData.data.additional_data} type={1} />
                </div>
              </div>
            </section>
          </div>
        </section>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Institucion;
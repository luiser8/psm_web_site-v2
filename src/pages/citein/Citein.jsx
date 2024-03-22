import React from 'react'
import AccordionCustom from '../../components/common/AccordionCustom';
import citeinData from "../../utils/mock/principalData/citeinData";

const Citein = () => {
  return (
    <div className="bg-white py-20 sm:py-20">
      {citeinData.active ? (
        <section className="w-full h-full dark:bg-dark">
          <div className="w-[90%] xl:w-[80%] h-full  overflow-hidden py-20 mx-auto ">
            <header className="py-4 w-full justify-center mx-auto flex flex-row gap-x-12 items-center">
              <h2 className="text-3xl lg:text-5xl font-bold">
                {citeinData.data.name}
              </h2>
            </header>
            <embed
                    className="w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[450px] xl:h-[600px]"
                    src={citeinData.data.pdf}
                    type="application/pdf"
                    height={800}
                    width={500}
                  />
          </div>
        </section>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Citein;
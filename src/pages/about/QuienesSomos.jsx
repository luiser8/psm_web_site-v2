import React from "react";
import QuienesSomosData from "../../utils/mock/principalData/quienesSomos";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";
import TeamCustom from "../../components/common/TeamCustom";
import AboutUsCustom from "../../components/common/AboutUsCustom";

export default function QuienesSomos() {
  return (
    <div className="bg-white py-20 sm:py-20">
      {QuienesSomosData.active ? (
        <section className="w-full h-full dark:bg-dark">
          <div className="w-[90%] xl:w-[80%] h-full overflow-hidden py-20 mx-auto">
            <header className="py-4 w-full justify-center mx-auto flex flex-row gap-x-12 lg:gap-x-5 items-center">
              <h2 className="text-3xl lg:text-5xl font-bold">
                {QuienesSomosData.data.name}
              </h2>
            </header>
            <section className="overflow-hidden pt-39 pb-17.5">
              <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
                 <AboutUsCustom data={QuienesSomosData.data} />
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
                <TeamCustom data={QuienesSomosData.data.additional_data} />
              </div>
            </section>
          </div>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
}

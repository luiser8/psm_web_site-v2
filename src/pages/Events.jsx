import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import eventosData from "../utils/mock/eventosData";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SectionTitle from "../components/common/SectionTitle";

const Events = () => {
  return (
    <section className="relative z-10 py-6 md:py-10 lg:py-10">
    <div className="">
      <SectionTitle
        title="Eventos"
        paragraph="Ponencias"
        center
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={45}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          enabled: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className=" w-[90%] h-auto  overflow-hidden flex justify-center content-center  bg-transparent  my-5"
      >
        {eventosData.data.map((events, index) => (
          <SwiperSlide
            className="flex justify-center items-center object-cover h-full mx-auto my-10"
            key={index}
          >
            <div className=" border-2 border-gray-500 rounded-lg overflow-hidden hover:border-orange-400 transition-all cursor-pointer">
              <img
                className="lg:h-full md:h-full w-full object-cover object-center"
                src={events.image}
                alt="image"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {events.name}
                </h1>
                <p className="leading-relaxed mb-3">{events.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
};

export default Events;

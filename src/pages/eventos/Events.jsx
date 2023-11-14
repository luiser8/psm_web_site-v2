import React from "react";
import eventosData from "../../utils/mock/eventosData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/CarouselEvent.css"
import SingleEventsPrincipal from "./SingleEventsPrincipal";

const Events = () => {
  const otherEvents = eventosData.data.filter((x) => x.active === false);
  return (
    <>
      {eventosData.active ? (
        <section className="relative z-10 py-6 md:py-10 lg:py-10">
          
          <div className="w-full h-full">
            <Swiper
              slidesPerView={1}
              spaceBetween={45}
              pagination={{
                clickable: true,
                // para cambiar color de la paginación
                 renderBullet: function (index, className) {
                   return '<span class="' + className + '">'  + '</span>';
                 },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                enabled: false,
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
                  spaceBetween: 40,
                },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className=" w-[95%] h-auto  overflow-hidden flex justify-center content-center  bg-transparent  my-5"
            >
              {otherEvents.map((events, index) => (
                <SwiperSlide className="mx-auto my-10" key={index}>
                  <SingleEventsPrincipal events={events} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default Events;

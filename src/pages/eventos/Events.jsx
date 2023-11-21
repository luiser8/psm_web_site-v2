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
        <section className="relative z-0 py-6 md:py-10 dark:bg-dark">
          <div className="w-full h-full">
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
              className=" w-[95%] h-auto overflow-hidden flex justify-center content-center bg-transparent"
            >
              {otherEvents.map((events, index) => (
                <SwiperSlide className="mx-auto mb-16 xl:mb-10" key={index}>
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

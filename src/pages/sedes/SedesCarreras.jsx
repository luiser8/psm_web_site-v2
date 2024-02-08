import SectionTitle from "../../components/common/SectionTitle";
import SingleCarrera from "../carreras/SingleCarrera";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SedesCarreras = ({data}) => {
  return (
    <>
      {data ? (
        <section id="carreras" className="relative z-0 h-auto sm:h-full mb-6 dark:bg-dark">
          <SectionTitle title="Carreras" center />
          <div className="w-full h-full">
            <Swiper
              slidesPerView={1}
              spaceBetween={45}
              pagination={{
                clickable: true,
                // para cambiar color de la paginación
                // renderBullet: function (index, className) {
                //   return '<span class="' + className + '">' + (index + 1) + '</span>';
                // },
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
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className=" w-[95%] overflow-hidden flex justify-center content-center  bg-transparent"
            >
              {data?.map((carrera) => (
                <SwiperSlide
                  className=" my-10 overflow-hidden"
                  key={carrera.id}
                >
                  <SingleCarrera carreras={carrera} />
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

export default SedesCarreras;

import { useState } from "react";
import eventosData from "../utils/mock/eventosData";
import Slider from "react-slick";

const Events = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="w-full">
          <span className="bg-orange-800 mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplaySpeed: 4000,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {eventosData.active ?
        <section className="relative z-10 py-16 md:py-20 lg:py-28" id="events">
          <div className="container">
            <div className="grid grid-cols-1 ">
              <Slider
                {...settings}
                arrows={false}
                ref={setSliderRef}
              >
                {eventosData.data.map((events, index) => (
                  <div className="p-4 md:w-1/3" key={index}>
                    <div className="h-full border-2 border-gray-500 rounded-lg overflow-hidden hover:border-orange-400 transition-all">
                      <img className="lg:h-full md:h-full w-full object-cover object-center" src={events.image} alt="image" />
                      <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{events.name}</h1>
                        <p className="leading-relaxed mb-3">{events.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="flex w-full items-center justify-end">
                <div className="flex flex-none justify-between w-auto mt-14">
                  <div
                    className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-400 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-400 cursor-pointer"
                    onClick={sliderRef?.slickPrev}
                  >
                    <a className="h-6 w-6 " />
                  </div>
                  <div
                    className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-400 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-400 cursor-pointer"
                    onClick={sliderRef?.slickNext}
                  >
                    <a className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        : <></>
      }
    </>
  );
};

export default Events;

import { React } from "react";
import { useSwiper } from "swiper/react";

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <>
      <button
        type="button"
        className="bg-primary rounded-full w-10 h-10 lg:w-14 lg:h-14"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <svg
          className="text-white cursor-pointer w-8 mx-auto"
          onClick={() => swiper.slidePrev()}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
      </button>
    </>
  );
}

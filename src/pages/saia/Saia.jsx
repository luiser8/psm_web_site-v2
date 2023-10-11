import { useState } from "react";
import ModalVideo from "react-modal-video";
import SectionTitle from "../../components/common/SectionTitle";
import componentSaiaData from "../../utils/mock/componentSaiaData";

const Saia = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <section className="w-full h-full">
          <SectionTitle
            title="Sistema de aprendizaje interactivo a distancia SAIA"
            paragraph="La Educación a distancia es una modalidad de enseñanza y aprendizaje cuya característica principal es la separación física de los participantes y facilitadores."
            center
            mb="80px"
          />

          {componentSaiaData.active ? (
            <section className="w-full h-full flex justify-center items-center gap-y-6 flex-col p-2 rounded-lg  mx-auto md:flex-row-reverse md:gap-x-5  lg:mt-10 mb-20">

              <div className="overflow-hidden h-full ">
                <img
                  src={componentSaiaData.image}
                  alt="eventos"
                  className=" mx-auto w-full h-full object-contain object-center"
                />
              </div>

              <div className="h-full md:w-1/2 flex items-center flex-col justify-center">
                <h1 className="text-xl mb-4 font-bold text-start md:text-lg xl:text-3xl">
                  {componentSaiaData.title}
                </h1>
                <span className="text-base font-normal leading-6 text-start xl:leading-8 ">
                  {componentSaiaData.data}
                </span>
              </div>
            </section>
          ) : (
            <></>
          )}
        </section>

        <section
          className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
          data-wow-delay=".15s"
        >
          <div className="relative aspect-[77/40] items-center justify-center">
            <img src="/images/video/video.jpg" alt="video image" />
            <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
              <button
                onClick={() => setOpen(true)}
                className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
              >
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  className="fill-current"
                >
                  <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      {isOpen ? (
        <>
          <div className="absolute bottom-0 left-0 right-0 z-[-1]">
            {/* <img src="/images/video/shape.svg" alt="shape" className="w-full" /> */}
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Saia;

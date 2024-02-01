import { useState } from "react";
import ModalVideo from "react-modal-video";
import componentSaiaData from "../../utils/mock/principalData/componentSaiaData";
import { NavLink as Link } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";

const Saia = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="bg-white/5 w-full mx-auto overflow-hidden mt-10 py-10">
      <div className="container">
        <SectionTitle title="S.A.I.A" paragraph="" center />
        <div className="w-[100%] h-full mx-auto">
          <section className="w-full h-full mb-6">
            {componentSaiaData.active ? (
              <div className="w-full h-auto">
                <section className="w-full h-auto flex justify-center items-center gap-y-10 flex-col rounded-lg mx-auto xl:flex-row-reverse lg:gap-x-20 xl:mt-10">
                  <div className="overflow-hidden h-auto ">
                    <img
                      src={componentSaiaData.image}
                      alt="eventos"
                      className=" mx-auto w-full min-h-[60vh] object-fill object-center"
                    />
                  </div>

                  <div className="h-full xl:w-1/2 flex items-center flex-col justify-center">
                    <h1 className="text-xl mb-4 font-bold text-start md:text-lg xl:text-3xl">
                      {componentSaiaData.title}
                    </h1>
                    <span className="text-base font-normal leading-6 text-start xl:leading-8 ">
                      {componentSaiaData.data}
                    </span>
                  </div>
                </section>
                <span className="w-full flex justify-center xl:justify-items-start mt-3">
                  <Link
                    to={componentSaiaData.path}
                    className={
                      "font-semibold text-lg md:text-2xl hover:text-primary transition-all ease-linear"
                    }
                  >
                    Más detalles
                  </Link>
                </span>
              </div>
            ) : (
              <></>
            )}
          </section>

          {/* <section
            className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
            data-wow-delay=".15s"
          >
            <h1 className="text-2xl mb-4 font-bold text-start md:text-2xl xl:text-2xl">
              Video: Instrucciones de como acceder a nuestro portal
            </h1>
            <div className="relative aspect-[77/40] items-center justify-center">
              <img src={componentSaiaData.videoImage} alt="video image" />
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
          </section> */}
        </div>

        {/* <ModalVideo
          channel="youtube"
          autoplay={true}
          start={true}
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />

        {isOpen ? (
          <>
            <div className="absolute bottom-0 left-0 right-0 z-[-1]"></div>
          </>
        ) : (
          <></>
        )} */}
      </div>
    </section>
  );
};

export default Saia;

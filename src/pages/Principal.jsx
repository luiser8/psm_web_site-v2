import { CarouselWithContent } from "../components/common/Carousel";
import principalData from "../utils/mock/principalData";

const Principal = () => {
  return (
    <>
      {principalData.active ?
        <section
          id="principal"
          className="relative z-10 overflow-hidden pb-10 md:pb-[10px] xl:pb-[10px] h-[60vh] md:h-[80vh]"
          // relative z-10 overflow-hidden pb-16 md:pb-[120px] xl:pb-[160px] 2xl:pb-[200px]
          style={{ paddingTop: "80px" }}
        >
          {principalData.data.active_carousel ? (
            <CarouselWithContent data={principalData.data.carousel_data} />
          ) : (
            <div className="container">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 py-16">
                  <div
                    className="wow fadeInUp mx-auto max-w-[800px] text-center"
                    data-wow-delay=".2s"
                  >
                    <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                      {principalData.data.title}
                    </h1>
                    <p className="mb-5 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                      {principalData.data.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        : <></>
      }
    </>
  );
};

export default Principal;

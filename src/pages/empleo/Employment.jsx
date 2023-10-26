import react from "react";
import countryCodesMock from "../../utils/mock/countryCodesMock";
import { NavLink as Link } from "react-router-dom";

const Employment = () => {
  return (
    <section className="overflow-hidden flex justify-center">
      <div className="flex flex-wrap mx-auto">
        <div className="w-full px-4 lg:w-7/12 xl:w-[52%] mx-auto">
          <div
            className="wow fadeInUp mb-12 rounded-md bg-transparent px-8 py-10 dark:bg-dark"
            data-wow-delay=".15s
              "
          >
            <Link to={"/"}>
              <img
                src="\images\carreras\arrows\arrow-left.png"
                alt="arrow"
                className="w-12"
              />
            </Link>
            <h2 className="mb-3 mt-5 text-center text-2xl font-extrabold text-black dark:text-white sm:text-3xl lg:text-4xl">
              Trabaja con nosotros
            </h2>
            <p className="mb-2 sm:mb-5 md:mb-10 text-lg font-medium text-body-color text-center">
              ¿Quieres formar parte de nuestro equipo?
            </p>
            <form>
              <div className="flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <label className="mb-3 block text-base lg:text-lg font-extrabold text-dark dark:text-white">
                      Nombres
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md font-medium py-2 px-2 text-base lg:text-lg text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp border-primary border-[1px]"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <label className="mb-3 block text-base lg:text-lg font-extrabold text-dark dark:text-white">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md py-2 px-2 font-medium text-base lg:text-lg text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp border-primary border-[1px]"
                    />
                  </div>
                </div>

                <div className="w-full px-4 md:w-full">
                  <div className="mb-8">
                    <label className="mb-3 block text-base lg:text-lg font-extrabold text-dark dark:text-white">
                      Correo
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md py-2 px-2 font-medium lg:text-lg text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp border-primary border-[1px]"
                    />
                  </div>

                  <div className="mb-8">
                    <label className="mb-3 block text-base lg:text-lg font-extrabold text-dark dark:text-white">
                      Teléfono
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                      <input
                        type="text"
                        className="w-full rounded-md py-2 px-2 font-medium text-base lg:text-lg text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp border-primary border-[1px]"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center">
                        <select
                          id="currency"
                          name="currency"
                          className="h-full w-auto rounded-md border-none border-primary bg-transparent pl-2 text-body-color placeholder-body-color  focus:border-none sm:text-sm outline-none"
                        >
                          {countryCodesMock.map((item, index) => (
                            <option
                              value={item.name}
                              key={index}
                            >{`${item.code} ${item.dial_code}`}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex items-center justify-center w-full px-4 mb-8">
                  <label class="flex flex-col items-center justify-center w-full h-48 border-[1px] border-primary  rounded-md cursor-pointer">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        class="w-12 h-12 mb-4 text-primary dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p class="mb-2 text-base text-center px-2 md:px-1 md:text-xl text-black dark:text-gray-400">
                        <span class="font-semibold">
                          Cargar curriculum  o
                          arrastrar y soltar
                        </span>
                      </p>
                      <p class="text-xs md:text-sm text-gray-500 font-semibold">
                      PDF, DOC, DOCX hasta 5MB
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>

                <div className="w-full px-4">
                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-base lg:text-lg font-extrabold  text-dark dark:text-white"
                    >
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full resize-none rounded-md py-3 px-3 font-medium text-base lg:text-lg text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp border-primary border-[1px]"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-4">
                  <button className="rounded-md bg-primary py-4 w-full text-base font-extrabold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employment;

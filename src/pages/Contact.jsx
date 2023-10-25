import react from "react";
import countryCodesMock from "../utils/mock/countryCodesMock";
import { NavLink as Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="overflow-hidden py-16 flex justify-center items-center">
      <div className="flex flex-wrap mx-auto">
        <div className="w-full px-4 lg:w-7/12 xl:w-[60%] mx-auto">
          <div
            className="wow fadeInUp mb-12 rounded-md bg-transparent py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
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
            <h2 className="mb-3 text-center text-2xl font-extrabold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-4xl">
              Contacto
            </h2>
            <p className="mb-12 text-lg font-medium text-body-color text-center">
              Información de contacto acerca de las carreras y planes de estudio
            </p>
            <form>
              <div className="flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <label className="mb-3 block text-base font-extrabold text-dark dark:text-white">
                      Nombres
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md font-medium py-3 px-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp border-primary border-[1px]"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <label className="mb-3 block text-base font-extrabold text-dark dark:text-white">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md  py-3 px-3 font-medium text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp border-primary border-[1px]"
                    />
                  </div>
                </div>

                <div className="w-full px-4 md:w-full">
                  <div className="mb-8">
                    <label className="mb-3 block text-base font-extrabold text-dark dark:text-white">
                      Correo
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md  py-3 px-3 font-medium text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp border-primary border-[1px]"
                    />
                  </div>

                  <div className="mb-8">
                    <label className="mb-3 block text-base font-extrabold text-dark dark:text-white">
                      Teléfono
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                      <input
                        type="text"
                        className="w-full rounded-md py-3 px-3 font-medium text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp border-primary border-[1px]"
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
                <div className="w-full px-4">
                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-base font-extrabold  text-dark dark:text-white"
                    >
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full resize-none rounded-md py-3 px-3 font-medium text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp border-primary border-[1px]"
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

export default Contact;

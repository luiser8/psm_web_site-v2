import react from "react";
import countryCodesMock from "../../utils/mock/countryCodesMock";
import { NavLink as Link } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";

const Contact = () => {
  return (
    <div className="bg-white py-20 sm:py-20">
    <section className="overflow-hidden flex justify-center dark:bg-dark ">
      <div className="flex flex-wrap mx-auto">
        <div className="w-full px-4 lg:w-7/12 xl:w-[53%] 2xl:w-[54%] mx-auto">
          <div
            className="wow fadeInUp mb-12 rounded-md bg-transparent px-8 py-10 dark:bg-dark"
            data-wow-delay=".15s
              "
          >
            <div className="flex flex-row  mb-10 w-full">
              <Link to={"/"}>
                <img
                  src="\images\carreras\arrows\arrow-left.png"
                  alt="arrow"
                  className="w-12 dark:bg-white rounded-full"
                />
              </Link>

              <SectionTitle
                center={"center"}
                title={"Contacto"}
                paragraph={
                  " Información de contacto acerca de las carreras y planes de estudio"
                }
              />
            </div>
            <form>
              <div className="flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <label className="mb-3 block text-base lg:text-lg font-extrabold text-black dark:text-white">
                      Nombres
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md font-medium py-2 px-2 text-base lg:text-lg text-body-color placeholder-body-color shadow-one outline-none focus:border-black focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp border-black border-[1px]"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <label className="mb-3 block text-base lg:text-lg font-extrabold text-black dark:text-white">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md  py-2 px-2 font-medium text-base lg:text-lg text-body-color placeholder-body-color shadow-one outline-none focus:border-black focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp border-black border-[1px]"
                    />
                  </div>
                </div>

                <div className="w-full px-4 md:w-full">
                  <div className="mb-8">
                    <label className="mb-3 block text-base lg:text-lg font-extrabold text-blaborder-black dark:text-white">
                      Correo
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md  py-2 px-2 font-medium lg:text-lg text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-black focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp border-black border-[1px]"
                    />
                  </div>

                  <div className="mb-8">
                    <label className="mb-3 block text-base lg:text-lg font-extrabold text-blaborder-black dark:text-white">
                      Teléfono
                    </label>

                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        className="w-full rounded-md py-2 px-2 pl-20 sm:pl-24 font-medium text-base lg:text-lg text-body-color placeholder-body-color shadow-one outline-none focus:border-black focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp border-black border-[1px]"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center gap-0 w-7">
                        <select
                          id="currency"
                          name="currency"
                          className="h-auto w-24 text-xs rounded-md border-none pl-1 sm:pl-2 border-primary border-4 bg-transparent text-body-color placeholder-body-color  focus:border-none sm:text-sm outline-none"
                        >
                          {countryCodesMock.map((item, index) => (
                            <option
                              className="text-xs w-14"
                              value={item.name}
                              key={index}
                            >
                              {`${item.code} ${item.dial_code}`}
                            </option>
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
                      className="mb-3 block text-base lg:text-lg font-extrabold  text-blaborder-black dark:text-white"
                    >
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full resize-none rounded-md py-3 px-3 font-medium text-base lg:text-lg text-body-color placeholder-body-color shadow-one outline-none focus:border-black focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp border-black border-[1px]"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-4">
                  <button className="rounded-md bg-blueDark py-4 w-full text-base font-extrabold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;

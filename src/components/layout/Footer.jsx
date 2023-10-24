import footerData from "../../utils/mock/footerData";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const institution = footerData.find((x) => x.id === 1);
  // const sede = footerData.find((x) => x.id === 2);
  const poliza = footerData.find((x) => x.id === 3);
  const orientacion = footerData.find((x) => x.id === 4);
  const socialNetworks = footerData.find((x) => x.id === 5);

  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-primary bg-opacity-5 pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="flex w-full p-2 flex-col justify-center items-start md:items-start md:flex-row md:justify-evenly">

            <div className="mb-5 max-w-[400px] col-span-1 md:w-1/2">
              <NavLink to="/" className="mb-3 inline-block">
                <img
                  src="images/logo/logo-2.svg"
                  alt="logo"
                  className="w-full dark:hidden"
                  width={140}
                  height={30}
                />
                <img
                  src="images/logo/logo.svg"
                  alt="logo"
                  className="hidden w-full dark:block"
                  width={140}
                  height={30}
                />
              </NavLink>

              <div className="flex items-center w-full gap-x-4">
                {socialNetworks.elements.map((element) => (
                  <div>
                    <a
                      key={element.id}
                      className="mr-6 text-[#CED3F6] hover:text-primary"
                      href={element.link}
                    >
                      <img src={element.icon} alt="icon" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full px-4 col-span-1 md:w-1/2 ">
              <div className="mb-5 lg:mb-16">
                <h2 className="mb-3 md:5 text-xl font-bold text-black dark:text-white   text-start md:text-base">
                  {institution.name}
                </h2>
                <ul>
                  {institution.elements.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary text-start md:text-start"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>


            {/* <div className="w-full px-4 sm:w-1/2 md:w-1/2 ">
              <div className="mb-5 lg:mb-16">
                <h2 className="mb-3 md:5 text-xl font-bold text-black dark:text-white   text-start md:text-base">
                  {sede.name}
                </h2>

                <ul>
                  {sede.elements.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary text-start"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}

            <div className="w-full col-span-1 px-4 md:w-1/2">
              <div className="mb-5 lg:mb-16">
                <h2 className="mb-3 md:5 text-xl font-bold text-black dark:text-white   text-start md:text-base">
                  {poliza.name}
                </h2>
                <ul>
                  {poliza.elements.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary text-start md:text-start"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full col-span-1 px-4 md:w-1/2">
              <div className="mb-8 lg:mb-16">
                <h2 className="mb-3 md:5 text-xl font-bold text-black dark:text-white   text-start md:text-base">
                  {orientacion.name}
                </h2>
                {
                  <ul>
                    {orientacion.elements.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.link}
                          className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary text-start"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary/10 py-8">
          <div className="container">
            <p className="text-center text-base text-body-color dark:text-white">
              ©2023 - Politécnico Santiago Mariño.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

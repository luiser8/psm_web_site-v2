import { useEffect, useState, useRef } from "react";
import menuData from "../../utils/mock/menuData";
import headerData from "../../utils/mock/principalData/headerData";
import ThemeToggler from "../../utils/theme/ThemeToggler";
import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sedesOpen, setSedesOpen] = useState(false);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        className={`header h-28 top-0 left-0 z-50 flex w-full items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-around">
            <div className="w-[140px] h-auto max-w-full px-4 xl:mr-12 overflow-hidden">
              <NavLink
                to="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <img
                  src={headerData[0].image}
                  alt="logo"
                  className="w-full object-fill dark:bg-white dark:rounded h-full"
                />
              </NavLink>
            </div>
            <div className="flex w-full items-center justify-end px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 xl:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark xl:visible xl:static xl:w-auto xl:border-none xl:!bg-transparent xl:p-0 xl:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  } `}
                >
                  <ul className="block xl:flex xl:space-x-12">
                    {menuData.filter(x => x.active).map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <div className="flex flex-row gap-x-2">
                            <NavLink
                              to={menuItem.path}
                              onClick={() => {
                                if (index === 3) {
                                  setSedesOpen(!sedesOpen);
                                }
                              }}
                              className={`flex py-2 text-base lg:text-nowrap transition-all font-medium ease-linear group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                            >
                              {menuItem.title}
                            </NavLink>
                            <svg
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              onClick={() => setSedesOpen(!sedesOpen)}
                              className={`transition-rotate duration-300 text-dark dark:text-white cursor-pointer ${
                                index === 3 ? "block w-6" : "hidden"
                              } ${sedesOpen ? "rotate-180 " : "rotate-0"}`}
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        ) : (
                          <>
                            {/* <a
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="15" height="14" viewBox="0 0 15 14">
                                  <path
                                    d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </a>
                            <div
                              className={`submenu relative top-full left-0 rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem) => (
                                <a
                                  href={submenuItem.path}
                                  key={submenuItem.id}
                                  className="block rounded py-2.5 text-sm text-dark hover:opacity-70 dark:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </a>
                              ))}
                            </div> */}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                  <DropDown open={sedesOpen} setSedesOpen={setSedesOpen} />
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                {/* <a
                  href="/sesion"
                  className="hidden py-3 px-7 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
                >
                  Iniciar sesión
                </a>
                <a
                  href="/signup"
                  className="ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Registrarse
                </a> */}
                <div>
                  <h1
                    className={
                      "flex py-2 text-base transition-all font-medium ease-linear group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 uppercase"
                    }
                  >
                    {location.pathname === "/sedes/barcelona"
                      ? "Barcelona"
                      : location.pathname === "/extension/maracaibo"
                        ? "Maracaibo"
                        : location.pathname === "/extension/cabimas"
                          ? "Cabimas"
                          : location.pathname === "/extension/ciudad_ojeda"
                            ? "Ciudad ojeda"
                            : location.pathname === "/extension/barinas"
                              ? "Barinas"
                              : location.pathname === "/extension/san_cristobal"
                                ? "San cristobal"
                                : location.pathname === "/extension/valencia"
                                  ? "Valencia"
                                  : location.pathname === "/extension/maracay"
                                    ? "Maracay"
                                    : location.pathname === "/extension/maturin"
                                      ? "Maturin"
                                      : location.pathname ===
                                          "/extension/puerto_ordaz"
                                        ? "Puerto ordaz"
                                        : location.pathname ===
                                            "/extension/porlamar"
                                          ? "Porlamar"
                                          : ""}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

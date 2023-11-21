import React from "react";
import { NavLink } from "react-router-dom";
import footerData from "../../utils/mock/footerData";

export default function SedesContact({ name = "Barcelona" }) {
  const year = new Date();
  const socialNetworks = footerData.find((x) => x.id === 5);
  return (
    <>
      <footer
        className="relative z-0 bg-[#4A6CF7] bg-opacity-5 flex flex-col p-3 justify-center items-center mt-10"
        data-wow-delay=".1s"
      >
        <div className="max-w-[110px] h-32 md:mr-5">
          <NavLink to="/" className="mb-3 inline-block">
            <img
              src="/images/logo/logo.png"
              alt="logo"
              className="w-full  object-fill dark:bg-white dark:rounded"
            />
          </NavLink>

          <div className="flex items-center w-full gap-x-4 flex-row">
            {socialNetworks.elements.map((element) => (
              <div key={element.id}>
                <a
                  className="mr-6 text-[#CED3F6] hover:text-primary"
                  href={element.link}
                  target="_blank"
                >
                  <img src={element.icon} alt="icon" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <p className="block text-left text-xl font-normal text-black dark:text-white">
          Sede - {name}
        </p>
      </footer>
    </>
  );
}

import React from "react";
import onClickOutside from "react-onclickoutside";
import SedesData from "../../utils/mock/sedesData";
import { NavLink } from "react-router-dom";

function DropDown({ open, setSedesOpen }) {
  DropDown.handleClickOutside = () => {
    setSedesOpen(false);
  };

  return (
    <>
      <div
        className={`${
          open ? "opacity-100 -translate-y-7" : "hidden"
        } transition ease-out duration-200 lg:`}
      >
        <div className="absolute left-[50%]  lg:left-[650px] z-10 w-[250px] xl:w-max mt-10 flex -translate-x-1/2">
          <div className="w-sm max-w-sm flex-auto gap-0  rounded-md bg-white text-sm h-auto shadow-lg ring-1 ring-gray-900/5 dark:bg-dark ">
            <ul className="p-2 mx-3 grid grid-cols-2 lg:grid-cols-2 gap-x-3 xl:gap-x-4">
              {SedesData.map((item) => (
                <li
                  className="cursor-pointer rounded-lg py-2 xl:p-3"
                  key={item.id}
                >
                  <NavLink
                    onClick={() => setSedesOpen(!open)}
                    to={
                      item.name.includes("Sede")
                        ? `/sedes/${item.link}`
                        : `/extension/${item.link}`
                    }
                    className={
                      "py-2 text- lg:text-lg text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => DropDown.handleClickOutside,
};

export default onClickOutside(DropDown, clickOutsideConfig);

import { useState, createContext } from "react";
import useLocalStorage from "./UseLocalStorage";
import headerData from "../mock/principalData/headerData";
import footerData from "../mock/principalData/footerData";

export const DataContext = createContext(null);

export const UseContextProvider = ({ children }) => {
  const {
    getHeaderStorage,
    getFooterStorage,
    setLocalStorage,
  } = useLocalStorage();
  const [, setDataHeader] = useState(headerData);
  const [, setDataFooter] = useState(footerData);

  const getHeader = () => {
    return getHeaderStorage();
  };

  const setHeader = (data) => {
    setLocalStorage(1,data);
    setDataHeader(data);
  };

  const getFooter = () => {
    return getFooterStorage();
  };

  const setFooter = (data) => {
    setLocalStorage(2,data);
    setDataFooter(data);
  };

  return (
    <DataContext.Provider value={{ getHeader, setHeader, getFooter, setFooter }}>
      {children}
    </DataContext.Provider>
  );
};

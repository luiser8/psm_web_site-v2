const useLocalStorage = () => {

  const getHeaderStorage = () => {
    return JSON.parse(window.localStorage.getItem("headerStorage"));
  };
  const getFooterStorage = () => {
    return JSON.parse(window.localStorage.getItem("footerStorage"));
  };

  const setLocalStorage = (
    type,
    data,
  ) => {
    if (type === 1) {
      if (data !== null) {
        window.localStorage.setItem("headerStorage", JSON.stringify(data));
      }
    } else if (type === 2) {
      window.localStorage.setItem("footerStorage", JSON.stringify(data));
    }
  };

  return {
    getHeaderStorage,
    getFooterStorage,
    setLocalStorage,
  };
};

export default useLocalStorage;
import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const userData = {
    name: "Abhi",
    Age: 25,
    occupation: "Full-Stack Developer",
  };

  return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };

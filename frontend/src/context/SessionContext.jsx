// HOOKS
import { createContext, useState } from "react";

export const SessionContext = createContext();

export const SessionContextProvider = ({ children }) => {
  const [sessionData, setSessionData] = useState(null);
  const isActive = !!sessionData;

  console.log(sessionData);
  const logout = () => {
    setSessionData(null);
  };

  return (
    <SessionContext.Provider
      value={{ sessionData, setSessionData, isActive, logout }}
    >
      {children}
    </SessionContext.Provider>
  );
};

import { createContext, useState, useEffect } from "react";

export const SessionContext = createContext();

export const SessionContextProvider = ({ children }) => {
  const [credentials, setCredentials] = useState();
  const isActive = !!credentials;

  console.log("Executou:", isActive);
  console.log(credentials);

  return (
    <SessionContext.Provider value={{ credentials, setCredentials, isActive }}>
      {children}
    </SessionContext.Provider>
  );
};

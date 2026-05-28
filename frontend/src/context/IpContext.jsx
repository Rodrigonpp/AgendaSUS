import { createContext } from "react";

export const IpContext = createContext();

export const IpContextProvider = ({ children }) => {
  const ip = "10.157.167.187"; //ALTERAR IP AQUI

  return <IpContext.Provider value={{ ip }}>{children}</IpContext.Provider>;
};

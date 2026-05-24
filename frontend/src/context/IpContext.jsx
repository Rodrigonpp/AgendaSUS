import { createContext } from "react";

export const IpContext = createContext();

export const IpContextProvider = ({ children }) => {
  const ip = "192.168.18.107"; //ALTERAR IP AQUI

  return <IpContext.Provider value={{ ip }}>{children}</IpContext.Provider>;
};

import { createContext } from "react";

export const IpContext = createContext();

export const IpContextProvider = ({ children }) => {
  const ip = "192.168.1.73"; //ALTERAR IP AQUI

  return <IpContext.Provider value={{ ip }}>{children}</IpContext.Provider>;
};

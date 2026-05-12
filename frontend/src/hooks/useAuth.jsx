// HOOKS
import { useEffect, useState, useContext } from "react";
import { useBD } from "./useBD";
// CONTEXT
import { SessionContext } from "../context/SessionContext";

export function useAuth() {
  const { user, getUser } = useBD();
  const [isAuth, setIsAuth] = useState(null);
  const [credentials, setCredentials] = useState(null);
  const { sessionData, isActive, setSessionData, logout } =
    useContext(SessionContext);

  const authenticate = (email, password) => {
    const url = `http://192.168.1.73:8080/api/users/search?email=${email}`;
    setCredentials({ email, password, url });
  };

  useEffect(() => {
    if (credentials) getUser(credentials.url);
  }, [credentials]);

  useEffect(() => {
    if (user && credentials) {
      if (
        credentials.email === user.email &&
        credentials.password === user.password
      ) {
        setSessionData(user);
        setIsAuth(true);
      } else {
        setIsAuth(false);
        console.log("Dados inválidos");
      }
    }
  }, [user]);

  return {
    isAuth,
    authenticate,
    logout,
    sessionData,
    isActive,
  };
}

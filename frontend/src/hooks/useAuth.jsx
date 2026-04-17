import { useEffect, useState } from "react";
import { useBD } from "./useBD";

export function useAuth() {
  const { user, getUser } = useBD();
  const [isAuth, setIsAuth] = useState(null);
  const [credentials, setCredentials] = useState(null);

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
        setIsAuth(true);
        console.log("Usuário logado com sucesso!", user.user_name);
      } else {
        setIsAuth(false);
        console.log("Dados inválidos");
      }
    }
  }, [user]);

  return { isAuth, authenticate };
}

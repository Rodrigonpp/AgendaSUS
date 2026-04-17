import { useState, useEffect } from "react";

export function useBD() {
  const [users, setUsers] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const [isRegistered, setIsRegistered] = useState();

  const getUsers = async () => {
    try {
      const response = await fetch("http://192.168.1.73:8080/api/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("Erro: ", error);
    } finally {
    }
  };

  const getUser = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log("Erro: ", error);
    }
  };

  const addUser = async (credentials) => {
    try {
      setFinished(false);
      setLoading(true);
      const response = await fetch("http://192.168.1.73:8080/api/addUser", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Registrado com sucesso!");
        setIsRegistered(true);
      } else {
        console.log("Erro: ", result.error);
        setIsRegistered(false);
      }
    } catch (error) {
      console.log("Erro na requisição");
      setIsRegistered(false);
    } finally {
      setLoading(false);
      setFinished(true);
    }
  };

  return { users, user, loading, isRegistered, finished, setIsRegistered, setFinished, getUsers, getUser, addUser };
}

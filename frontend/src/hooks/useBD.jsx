import { useState, useEffect } from "react";

export function useBD() {
  const [users, setUsers] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const url = "http://192.168.1.73:81/api/users";

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("Erro: ", error);
    } finally {
      setLoading(false);
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

  return { users, user, loading, getUsers, getUser };
}

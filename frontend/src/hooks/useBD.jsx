import { useState, useContext } from "react";

import { IpContext } from "../context/IpContext";

export function useBD() {
  const [users, setUsers] = useState(null);
  const [user, setUser] = useState(null);
  const [freeSchedules, setFreeSchedules] = useState();
  const [clinics, setClinics] = useState({});
  const [specialties, setSpecialties] = useState({});

  const [loading, setLoading] = useState(false);
  const [clinicLoaded, setClinicLoaded] = useState(false);
  const [specialtieLoaded, setSpecialtieLoaded] = useState(false);
  const [finished, setFinished] = useState(false);
  const [isRegistered, setIsRegistered] = useState();

  const { ip } = useContext(IpContext);

  const getUsers = async () => {
    try {
      const response = await fetch(`http://${ip}:8080/api/users`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("Erro: ", error);
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
      const response = await fetch(`http://${ip}:8080/api/addUser`, {
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

  const getClinics = async () => {
    try {
      setClinicLoaded(false);
      const response = await fetch(`http://${ip}:8080/api/clinics`);
      const data = await response.json();
      setClinics(data);
      console.log(data);
    } catch (error) {
      console.log("Erro: ", error);
    } finally {
      setClinicLoaded(true);
    }
  };

  const getSpecialties = async () => {
    try {
      setSpecialtieLoaded(false);
      const response = await fetch(`http://${ip}:8080/api/specialties`);
      const data = await response.json();
      setSpecialties(data);
      console.log(data);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setSpecialtieLoaded(true);
    }
  };

  return {
    users,
    user,
    loading,
    isRegistered,
    finished,
    freeSchedules,
    clinics,
    specialties,
    clinicLoaded,
    specialtieLoaded,
    setIsRegistered,
    setFinished,
    getUsers,
    getUser,
    addUser,
    getClinics,
    getSpecialties,
  };
}

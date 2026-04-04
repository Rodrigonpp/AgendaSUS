import { useState, useEffect } from "react";
import { useBD } from "../hooks/useBD";

const ScheduleView = () => {
  const url =
    "http://192.168.1.73:81/api/users/search?email=cg203@gmail.com";
  const { user, getUser } = useBD();

  useEffect(() => {
    getUser(url);
  }, []);

  if (!user) return <h2>Carregando dados de usuário...</h2>;

  return (
    <div>
      <h2>{user?.user_name}</h2>
      <h2>{user?.cpf}</h2>
      <h2>{user?.email}</h2>
      <h2>{user?.password}</h2>
    </div>
  );
};

export default ScheduleView;

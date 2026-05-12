// HOOKS
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { useBD } from "../hooks/useBD";
// CONTEXT
import { SessionContext } from "../context/SessionContext";

const ScheduleView = () => {
  const navigate = useNavigate();
  const { sessionData } = useContext(SessionContext);

  console.log(sessionData);

  return (
    <div>
      <h1>Bem vindo, {sessionData.name}</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default ScheduleView;

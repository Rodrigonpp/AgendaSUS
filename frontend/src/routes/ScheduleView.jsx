// HOOKS
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
// CONTEXT
import { SessionContext } from "../context/SessionContext";

const ScheduleView = () => {
  const navigate = useNavigate();
  const { sessionData, logout } = useContext(SessionContext);

  return (
    <div>
      <h1>Bem vindo, {sessionData.user_name}</h1>
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

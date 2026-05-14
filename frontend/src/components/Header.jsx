import { useContext } from "react";
import { useNavigate } from "react-router";
// ASSETS
import agendasus from "../assets/agendasus.svg";
import logout_icon from "../assets/logout.svg";
//CONTEXT
import { SessionContext } from "../context/SessionContext";
// STYLES
import "./Header.css";

const Header = () => {
  const { sessionData, isActive, logout } = useContext(SessionContext);
  const navigate = useNavigate();

  return (
    <header>
      <div className="logo-container">
        <img
          src={agendasus}
          alt="Logo AgendaSUS"
          onClick={() => {
            if (isActive) {
              navigate("/agendar");
            } else {
              navigate("/");
            }
          }}
          className="header-logo"
          title="Home"
        />
        <h2>
          <span className="green">Agenda</span>
          <span className="blue">SUS</span>
        </h2>
      </div>
      {isActive ? (
        <div className="session-container">
          <div className="greetings-container">
            <span className="greetings" title="Alterar dados pessoais">
              Olá, {sessionData.name}
            </span>
          </div>
          <div className="links-container">
            <span className="header-links">Nossas unidades</span>
            <span className="header-links">Seus agendamentos</span>
            <img
              src={logout_icon}
              alt="Encerrar sessão"
              title="Encerrar sessão"
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </header>
  );
};

export default Header;

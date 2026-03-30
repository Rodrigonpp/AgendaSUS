import React from "react";
import { useNavigate } from "react-router";
// ASSETS
import agendasus from "../assets/agendasus.svg";
// STYLES
import "./Header.css";

const Header = () => {
  const navigate = useNavigate()
  
  return (
    <header>
      <div className="header-container">
        <img src={agendasus} alt="Logo AgendaSUS" onClick={() => navigate("/")} className="header-logo"/>
        <h2>
          <span className="green">Agenda</span>
          <span className="blue">SUS</span>
        </h2>
      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import agendasus from "./assets/agendasus.svg";
import "./App.css";
import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <header>
        <div className="header-container">
          <img src={agendasus} alt="Logo AgendaSUS" />
          <h2>
            <span className="green">Agenda</span>
            <span className="blue">SUS</span>
          </h2>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default App;

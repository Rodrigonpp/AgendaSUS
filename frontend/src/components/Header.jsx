import React from 'react'
// ASSETS
import agendasus from "../assets/agendasus.svg";
// STYLES
import "./Header.css"

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={agendasus} alt="Logo AgendaSUS" />
        <h2>
          <span className="green">Agenda</span>
          <span className="blue">SUS</span>
        </h2>
      </div>
    </header>
  )
}

export default Header
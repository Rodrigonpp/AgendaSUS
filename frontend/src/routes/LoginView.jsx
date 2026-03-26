import React from 'react'
// ASSETS
import agendasus from "../assets/agendasus.svg";
import google_icon from "../assets/google-icon.svg"
// STYLES
import "./LoginView.css"

const LoginView = () => {
  return (
    <div className="login-view">
      <section className="presentation-container">
        <div className="presentation">
          <div className="brand-title">
            <img src={agendasus} alt="AgendaSUS logo" />
            <h2>
              <span className="green">Agenda</span>
              <span className="blue">SUS</span>
            </h2>
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi neque reprehenderit aspernatur, deleniti quis asperiores ex quasi, dicta exercitationem odit aperiam rem minus! Minima pariatur voluptas quisquam fugiat perferendis.
            </p>
          </div>
        </div>
      </section>
      <section className="login-container">
        <form className="login">
          <h3>Identifique-se com:</h3>
          <label htmlFor="email">
            E-mail:
            <input type="text" required placeholder="Digite seu e-mail..." name="email" className="email" />
          </label>
          <label htmlFor="password" >
            E-mail:
            <input type="password" name="password" id="password" required placeholder="Digite sua senha..." />
          </label>
          <button type="submit">Entrar</button>
          <span className="forget-password">Esqueceu a senha?</span>
          <div className="login-methods">
            <span>Ou entrar com:</span>
            <div className="login-with-google">
              <img src={google_icon} alt="Google logo" />
              <span>Google</span>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default LoginView
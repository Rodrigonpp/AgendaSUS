import { useState } from "react";
import { useNavigate } from "react-router";
import { PatternFormat } from "react-number-format";
// COMPONENTS
import Presentation from "../components/Presentation";
// ASSETS
import backIcon from "../assets/back-icon.svg";

const Register = () => {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");

  return (
    <div className="login-view">
      <Presentation />
      <section className="login-container">
        <form className="register-form">
          <div className="title-container">
            <img src={backIcon} alt="Voltar" className="back-icon" />
            <h3>Cadastre-se</h3>
          </div>
          <label htmlFor="cpf">
            <span>
              CPF: <span className="required">*</span>
            </span>
            <PatternFormat
              format="###.###.###-##"
              mask="_"
              placeholder="000.000.000-00"
              required
              id="cpf"
              name="cpf"
              value={cpf || ""}
              onValueChange={(value) => {
                setCpf(value.value);
                console.log(cpf);
              }}
            />
          </label>
          <button type="submit">Concluído</button>
        </form>
      </section>
    </div>
  );
};

export default Register;

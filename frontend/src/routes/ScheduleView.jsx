// HOOKS
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useBD } from "../hooks/useBD";
// CONTEXT
import { SessionContext } from "../context/SessionContext";
// STYLES
import "./ScheduleView.css";

const ScheduleView = () => {
  const today = new Date().toISOString().split("T")[0];

  const navigate = useNavigate();
  const { sessionData } = useContext(SessionContext);
  const { getFreeSchedules, freeSchedules } = useBD();

  // TEMP PAREI AQUI
  const [agenda_teste, setAgenda_teste] = useState(null);
  useEffect(async () => {
    const response = fetch("http://192.168.1.73:8080/api/free_schedules");
    const data = await response.json();
    setAgenda_teste(data);
  }, []);
  useEffect(() => {
    console.log(agenda_teste);
  }, [agenda_teste]);

  return (
    <div id="schedule-panel">
      <form id="filter-form">
        <label htmlFor="specialtie" id="specialtie">
          <span className="filter-title">
            Selecione uma especialidade: <span className="required">*</span>
          </span>
          <select name="specialtie" id="specialtie-select">
            {/* Criar um comando para consultar especialidades no banco  - precisa carregar antes da tela*/}
            <option value="Cardiologia">Cardiologia</option>
            <option value="Dermatologia">Dermatologia</option>
            <option value="Pediatria">Pediatria</option>
            <option value="Ortopedia">Ortopedia</option>
            <option value="Ginecologia">Ginecologia</option>
            <option value="Psiquiatria">Psiquiatria</option>
            <option value="Oftalmologia">Oftalmologia</option>
            <option value="Neurologia">Neurologia</option>
            <option value="Endocrinologia">Endocrinologia</option>
            <option value="Urologia">Urologia</option>
          </select>
        </label>
        <label htmlFor="clinic" id="clinic">
          <span className="filter-title">Clínica:</span>
          <select name="clinic" id="clinic-select">
            {/* Criar um comando para consultar clinicas no banco  - precisa carregar antes da tela*/}
            <option value="">Clínica Saúde Total</option>
            <option value="">Centro Médico Vida</option>
            <option value="">Hospital Santa Helena</option>
            <option value="">Pronto Socorro Central</option>
            <option value="">Clínica Bem Estar</option>
            <option value="">Instituto da Visão</option>
            <option value="">Clínica Ortopédica Sul</option>
            <option value="">Centro de Diagnóstico Alpha</option>
            <option value="">Medicina Integrada</option>
            <option value="">Hospital do Coração</option>
          </select>
        </label>
        <label htmlFor="date" id="date">
          <span className="filter-title">
            Data: <span className="required">*</span>
          </span>
          <input type="date" name="date" id="date-input" defaultValue={today} />
        </label>
        <button type="submit" className="find-schedules-btn">
          Consultar agendas
        </button>
      </form>
      <div className="schedules-container">
        <ul className="schedules-list">
          {agenda_teste ? (
            agenda_teste.map((agenda) => {
              const date = new Date(agenda.start_time);
              const weekDay = date
                .toLocaleDateString("pt-BR", {
                  weekday: "short",
                })
                .toUpperCase();

              return (
                <li key={agenda.id} className="schedule">
                  <div>
                    <h2 className="doctor">{agenda.doctor}</h2>
                    <span className="specialtie">{agenda.specialtie}</span>
                  </div>
                  <div>
                    <span className="local">Local:</span>
                    <span className="clinic">{agenda.clinic}</span>
                  </div>
                  <div className="date-and-time-info">
                    <span className="start-time">
                      {agenda.start_time.split("T")[1]}
                    </span>
                    <span className="weekday">{weekDay}</span>
                    <span className="date">
                      {agenda.start_time.split("T")[0]}
                    </span>
                  </div>
                </li>
              );
            })
          ) : (
            <p>Agenda não carregada</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ScheduleView;

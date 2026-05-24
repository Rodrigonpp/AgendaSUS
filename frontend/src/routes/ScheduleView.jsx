// HOOKS
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useBD } from "../hooks/useBD";
// CONTEXT
import { SessionContext } from "../context/SessionContext";
// STYLES
import "./ScheduleView.css";

const ScheduleView = () => {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  const { sessionData } = useContext(SessionContext);
  const {
    freeSchedules,
    getClinics,
    getSpecialties,
    clinics,
    specialties,
    clinicLoaded,
    specialtieLoaded,
  } = useBD();

  const [specialtieState, setSpecialtieState] = useState("");
  const [clinicState, setClinicState] = useState("");
  const [date, setDate] = useState(today);

  useEffect(() => {
    getSpecialties();
    getClinics();
  }, []);

  return (
    <div id="schedule-panel">
      {clinicLoaded && specialtieLoaded ? (
        <form
          id="filter-form"
          onSubmit={(e) => {
            e.preventDefault();
            const filterData = {
              specialtieState: specialtieState,
              clinicState: clinicState,
              date: date,
            };
            console.log(filterData);
          }}
        >
          <label htmlFor="specialtie" id="specialtie">
            <span className="filter-title">
              Selecione uma especialidade: <span className="required">*</span>
            </span>
            <select
              name="specialtie"
              id="specialtie-select"
              onChange={(e) => setSpecialtieState(e.target.value)}
              value={specialtieState}
            >
              <option value="">Selecione uma especialidade...</option>
              {specialties.map((specialtie) => (
                <option key={specialtie.id} value={specialtie.name}>
                  {specialtie.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="clinic" id="clinic">
            <span className="filter-title">Clínica:</span>
            <select
              name="clinic"
              id="clinic-select"
              onChange={(e) => setClinicState(e.target.value)}
              value={clinicState}
            >
              <option value="">Selecione uma clínica...</option>
              {clinics.map((clinic) => (
                <option key={clinic.id} value={clinic.name}>
                  {clinic.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="date" id="date">
            <span className="filter-title">
              Data: <span className="required">*</span>
            </span>
            <input
              type="date"
              name="date"
              id="date-input"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </label>
          <button type="submit" className="find-schedules-btn">
            Consultar agendas
          </button>
        </form>
      ) : (
        <h2>Carregando...</h2>
      )}
      <div className="schedules-container">
        <ul className="schedules-list">
          {freeSchedules ? (
            freeSchedules.map((agenda) => {
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

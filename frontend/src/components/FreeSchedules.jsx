import React from "react";

const FreeSchedules = ({ freeSchedules }) => {
  return (
    <div className="schedules-container">
      <ul className="schedules-list">
        {!freeSchedules ? (
          <p>
            Filtre para encontrar uma consulta.
          </p>
        ) : (
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
        )}
      </ul>
    </div>
  );
};

export default FreeSchedules;

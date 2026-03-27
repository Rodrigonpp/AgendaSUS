import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import LoginView from "./routes/LoginView.jsx";
import ScheduleView from "./routes/ScheduleView.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<LoginView />} />
          <Route path="agendar" element={<ScheduleView />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);

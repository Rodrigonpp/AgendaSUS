import App from "./App.jsx";
// HOOKS
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
// STYLES
import "./index.css";
// ROUTES
import LoginView from "./routes/LoginView.jsx";
import ScheduleView from "./routes/ScheduleView.jsx";
import Register from "./routes/Register.jsx";
import { SessionContextProvider } from "./context/SessionContext.jsx";
import { IpContextProvider } from "./context/IpContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SessionContextProvider>
        <IpContextProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<LoginView />} />
              <Route path="agendar" element={<ScheduleView />} />
              <Route path="cadastrar" element={<Register />} />
            </Route>
          </Routes>
        </IpContextProvider>
      </SessionContextProvider>
    </BrowserRouter>
  </StrictMode>,
);

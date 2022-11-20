import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import MonitoringPage from "./pages/MonitoringPage";
import React from "react";
import SSHPage from "./pages/SSHPage";
import TempMonitor from "./pages/TempMonitor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/monitoringpage" element={<MonitoringPage />} />
        <Route path="/tempmonitor" element={<TempMonitor/>} />
        <Route path="/sshtest" element={<SSHPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

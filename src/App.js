import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MonitoringPage from "./pages/MonitoringPage";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element = {< LoginPage/>} />
          <Route path="/monitoringpage" element={<MonitoringPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
  </BrowserRouter>
  );
}

export default App;

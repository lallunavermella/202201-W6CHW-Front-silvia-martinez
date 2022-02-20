import "./App.css";
import MainPage from "./pages/MainPage";
import { Navigate, Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/robots" />} />
        <Route path="/robots" element={<MainPage />} />
        <Route path="/robots/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import MainPage from "./pages/mainPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Robots</h1>
      <Routes>
        <Route path="/" element={<div>HOLA</div>} />
        <Route path="/robots" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;

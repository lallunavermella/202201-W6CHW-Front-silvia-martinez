import "./App.css";
import MainPage from "./pages/mainPage";
import { Route, Routes } from "react-router-dom";
import OneRobot from "./components/OneRobot/OneRobot";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/robot/:id" element={<OneRobot />} />
      </Routes>
    </div>
  );
}

export default App;

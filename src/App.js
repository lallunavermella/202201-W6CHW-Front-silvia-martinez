import "./App.css";
import MainPage from "./pages/mainPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/robots" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;

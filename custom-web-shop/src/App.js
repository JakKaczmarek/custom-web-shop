import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import MainPage from "./pages/Main/Main";

function App() {
  return (
    <div className="App">
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

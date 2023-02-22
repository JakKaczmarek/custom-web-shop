import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(false);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <div className="app">
        <AuthContext.Provider value={[isAuthenticated, setIsAuthenticated]}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthContext.Provider>
      </div>
    </div>
  );
}

export default App;

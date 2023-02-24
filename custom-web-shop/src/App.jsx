import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

export const AuthContext = createContext(false);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <div className="app">
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products/:id" element={<Login />} />
          </Routes>
        </AuthContext.Provider>
      </div>
    </div>
  );
}

export default App;

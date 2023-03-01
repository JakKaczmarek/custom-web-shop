import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import { AuthContext } from "./contexts/AuthContext";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Cart from "./pages/Cart/Cart";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <div className="app">
        {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </AuthContext.Provider>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useMemo } from "react";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import { AuthContext } from "./contexts/AuthContext";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Cart from "./pages/Cart/Cart";
import { ShopContextProvider } from "./contexts/ShopContext";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const value = useMemo(
    () => ({
      isAuthenticated,
      setIsAuthenticated,
    }),
    [isAuthenticated, setIsAuthenticated]
  );

  return (
    <div className="App">
      <div className="app">
        <ShopContextProvider>
          <AuthContext.Provider value={value}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </AuthContext.Provider>
        </ShopContextProvider>
      </div>
    </div>
  );
}

export default App;

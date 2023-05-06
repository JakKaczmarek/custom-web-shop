import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useMemo } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { SnackbarProvider } from "notistack";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Payment from "./pages/Checkout/Payment";
import { ShopContextProvider } from "./contexts/ShopContext";
import { AuthContextProvider } from "./contexts/AuthContext";

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
        <SnackbarProvider
          maxSnack={2}
          autoHideDuration={1500}
          style={{
            backgroundColor: "#c9940d",
          }}
        >
          <ShopContextProvider>
            <AuthContextProvider value={value}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/product/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/checkout/payment" element={<Payment />} />
              </Routes>
            </AuthContextProvider>
          </ShopContextProvider>
        </SnackbarProvider>
      </div>
    </div>
  );
}

export default App;

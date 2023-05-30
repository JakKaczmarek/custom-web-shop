import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Payment from "./pages/Checkout/Payment";
import { ShopContextProvider } from "./contexts/ShopContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="app">
        <SnackbarProvider maxSnack={2} autoHideDuration={1500}>
          <ShopContextProvider>
            <AuthContextProvider>
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

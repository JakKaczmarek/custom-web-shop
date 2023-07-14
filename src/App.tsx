import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { ShopContextProvider } from "./contexts/ShopContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Checkout from "./pages/Checkout/Checkout";
import CustomerOrders from "./pages/Customer/CustomerOrders";
import Cart from "./pages/Cart/Cart";
import Admin from "./pages/Admin/Admin";
import Register from "./pages/Login/Register";

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
                <Route path="/register" element={<Register />} />
                <Route path="/product/:id" element={<SingleProduct />} />
                <Route path="/history" element={<CustomerOrders />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </AuthContextProvider>
          </ShopContextProvider>
        </SnackbarProvider>
      </div>
    </div>
  );
}

export default App;

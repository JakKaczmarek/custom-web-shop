import React from "react";
import pieskii from "./pieskii.png";
import SearchBar from "./SearchBar/SearchBar";
import AccountList from "./AccountList/AccountList";
import Cart from "./Cart/Cart";

export default function NavBar() {
  return (
    <div>
      <img src={pieskii} alt="Pieskii"></img> <br></br>
      <SearchBar />
      <AccountList />
      <Cart />
    </div>
  );
}

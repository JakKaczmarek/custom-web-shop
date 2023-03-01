import React from "react";
import logoebike from "./logoebike.png";
import SearchBar from "./SearchBar/SearchBar";
import AccountList from "./ShoppingCart/ShoppingCart";
import Sign from "./Sign/Sign";

export default function NavBar() {
  return (
    <div className="navBar">
      <img src={logoebike} alt="logoebike" style={{ width: 170, height: 70 }} />
      <SearchBar />
      <AccountList />
      <Sign />
    </div>
  );
}

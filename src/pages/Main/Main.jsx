import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Products from "../../components/Products/Products";

export default function Main() {
  // @TODO: Use fragment https://reactjs.org/docs/fragments.html
  return (
    <div>
      <NavBar />
      <Products />
    </div>
  );
}

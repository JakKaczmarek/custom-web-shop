import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";
import ShopPagination from "../../components/Pagination/Pagination";

export default function Main() {
  return (
    <>
      <NavBar />
      <Products />
      <ShopPagination />
      <Footer />
    </>
  );
}

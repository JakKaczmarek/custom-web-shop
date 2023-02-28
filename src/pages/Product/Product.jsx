import React from "react";
import { useParams } from "react-router";

function Product() {
  const { id } = useParams();
  return <div>bike {id}</div>;
}

export default Product;

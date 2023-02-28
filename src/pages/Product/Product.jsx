import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { bikes } from "../../mocks/bikes";

function Product() {
  const { id } = useParams();
  const [productId, setProductId] = useState(-1);

  useEffect(() => {
    setProductId(bikes.findIndex((bike) => bike.id.toString() === id));
  }, []);

  if (productId > -1) {
    return (
      <div>
        <p> bike {id}</p>
        <img src={bikes[productId].src} alt={bikes[productId].alt} />
        <div>{bikes[productId].bikeName}</div>
      </div>
    );
  }
  return <p>Loading...</p>;
}
export default Product;

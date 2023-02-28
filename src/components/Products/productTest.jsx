import React from "react";
import { bikes } from "../../mocks/bikes";

export default function Product() {
  return (
    <div className="product">
      <img src={bikes.src} alt={bikes.alt} />
      <div className="description">
        <p>
          <b>gege{bikes.bikeName}</b>
        </p>
        <p> ${bikes.price}</p>
      </div>
    </div>
  );
}

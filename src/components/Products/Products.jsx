import React from "react";
import { bikes } from "../../mocks/bikes";

export default function Products() {
  return (
    <div className="products">
      {bikes.map((bike) => (
        <img
          key={bike.id}
          src={bike.src}
          alt={bike.alt}
          className="product"
          style={{ width: 400, height: 400 }}
        />
      ))}
    </div>
  );
}

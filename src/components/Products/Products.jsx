import React from "react";
import { bikes } from "../../mocks/bikes";

export default function Products() {
  return (
    <div className="products">
      {bikes.map((bike) => {
        return (
          <div className="product">
            <div className="bike">
              <img
                key={bike.id}
                src={bike.src}
                alt={bike.alt}
                style={{ width: 380, height: 380 }}
              />
            </div>
            <div className="description">
              <p>
                <b>{bike.bikeName}</b>
              </p>
              <p> {bike.price}</p>
              <button type="button">Show more info</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

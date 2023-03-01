import React from "react";
import { NavLink } from "react-router-dom";
import { bikes } from "../../mocks/bikes";

export default function Products() {
  return (
    <div className="products">
      {bikes.map((bike) => {
        return (
          <div className="product" key={bike.id}>
            <div className="bike">
              <img
                key={bike.id}
                src={bike.src}
                alt={bike.alt}
                className="image"
                style={{ width: 380, height: 380 }}
              />
            </div>
            <div className="description">
              <p>
                <b>{bike.bikeName}</b>
              </p>
              <p> ${bike.price}</p>
              <div className="Btns">
                <NavLink to={`/product/${bike.id}`}>
                  <button type="button" className="infoBtn">
                    <b>Show Info</b>
                  </button>
                </NavLink>
                <button type="button" className="addToCartBtn">
                  <b>Add To Cart</b>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

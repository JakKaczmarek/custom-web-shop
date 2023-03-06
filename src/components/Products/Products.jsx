import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSnackbar } from "notistack";
import { bikes } from "../../mocks/bikes";
import { ShopContext } from "../../contexts/ShopContext";

export default function Products() {
  const { addToCart } = useContext(ShopContext);
  const [query, setQuery] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  function Click(variant) {
    enqueueSnackbar("Bike added to cart successfully!", { variant });
  }

  return (
    <div>
      <div className="Search">
        <input
          type="text"
          placeholder="Search for product ... "
          className="SearchInput"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="products">
        {bikes
          .filter((bike) =>
            bike.bikeName.toLowerCase().includes(query.toLowerCase())
          )
          .map((bike) => {
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
                  <p className="bikeName">
                    <b>{bike.bikeName}</b>
                  </p>
                  <p className="bikePrice"> ${bike.price}</p>
                  <div className="Btns">
                    <NavLink to={`/product/${bike.id}`}>
                      <button type="button" className="infoBtn">
                        <b>Show Info</b>
                      </button>
                    </NavLink>
                    <button
                      type="button"
                      className="addToCartBtn"
                      onClick={() => Click(addToCart(bike.id))}
                    >
                      <b>Add To Cart </b>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

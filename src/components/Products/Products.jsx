import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { bikes } from "../../mocks/bikes";
import { ShopContext } from "../../contexts/ShopContext";
import Popup from "../Popup/Popup";

export default function Products() {
  const { addToCart } = useContext(ShopContext);
  const [query, setQuery] = useState("");
  const [openPopup, setOpenPopup] = useState(false);

  function Click() {
    setOpenPopup(true);
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
                    <button
                      type="button"
                      className="addToCartBtn"
                      onClick={() => Click(addToCart(bike.id))}
                    >
                      Add To Cart{" "}
                    </button>
                    {openPopup && <Popup closePopup={setOpenPopup} />}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

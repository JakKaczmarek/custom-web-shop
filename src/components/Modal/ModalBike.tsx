import React, { useState } from "react";
import "../../App.css";
import axios from "axios";
import { IaddBike, IsetModalOpenBike } from "../../../@types/types";

function ModalBike({
  setModalOpenBike,
  addBike,
}: IsetModalOpenBike & IaddBike) {
  const [bike, setBike] = useState({
    bike_name: "",
    price: "",
    category: "",
    alt: "",
    src: "",
  });

  const handleSubmitNewBike = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const bikeData = bike;
    axios.post(`http://localhost:8000/api/bikes`, bikeData).then((response) => {
      console.log(response.status);
      addBike();
    });
  };
  const handleChangeBike = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBike({
      ...bike,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="modalBackground">
      <form onSubmit={handleSubmitNewBike}>
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              type="button"
              onClick={() => {
                setModalOpenBike(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Add new bike to shop</h1>
          </div>
          <div className="body">
            <label htmlFor="bikeName">
              bikeName
              <input
                type="text"
                name="bikeName"
                value={bike.bike_name}
                onChange={handleChangeBike}
              />
            </label>
            <label htmlFor="price">
              price
              <input
                type="text"
                name="price"
                value={bike.price}
                onChange={handleChangeBike}
              />
            </label>
            <label htmlFor="category">
              category
              <input
                type="text"
                name="category"
                value={bike.category}
                onChange={handleChangeBike}
              />
            </label>
            <label htmlFor="alt">
              alt
              <input
                type="text"
                name="alt"
                value={bike.alt}
                onChange={handleChangeBike}
              />
            </label>
            <label htmlFor="src">
              src
              <input
                type="text"
                name="src"
                value={bike.src}
                onChange={handleChangeBike}
              />
            </label>
          </div>
          <div className="footer">
            <button
              type="button"
              onClick={() => {
                setModalOpenBike(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button type="submit">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalBike;

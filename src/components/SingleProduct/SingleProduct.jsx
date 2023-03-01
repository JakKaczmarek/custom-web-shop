import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { bikes } from "../../mocks/bikes";

function SingleProduct() {
  const { id } = useParams();
  const [productId, setProductId] = useState(-1);

  useEffect(() => {
    setProductId(bikes.findIndex((bike) => bike.id.toString() === id));
  }, []);
  if (productId > -1) {
    return (
      <div className="container">
        <div className="productBike">
          {" "}
          <img
            src={bikes[productId].src}
            alt={bikes[productId].alt}
            className="image"
          />
          <p className="title">{bikes[productId].bikeName}</p>
          <p className="price">
            ${bikes[productId].price}.00{" "}
            <button type="button" className="addToCartBtn">
              Add To Cart
            </button>
          </p>
        </div>
        <div className="description">
          <p className="descriptionHeader">Description</p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          velit ac est molestie vestibulum. Donec vehicula sem quis nisl
          venenatis, et faucibus odio sollicitudin. Maecenas sed augue vel
          tortor lacinia sagittis ac nec ligula. Nunc et quam vel ipsum
          ullamcorper molestie. In bibendum lobortis ullamcorper. Integer
          ultricies pretium felis ac tristique. Aenean nibh lorem, iaculis quis
          porttitor nec, consectetur non justo.
          <br />
          <br />
          Nullam finibus, erat ac eleifend euismod, neque mi fringilla orci, sit
          amet varius orci dolor vel risus. Ut sapien nisl, commodo sed pharetra
          id, tincidunt at mi. Integer est augue, volutpat id sem id, commodo
          euismod ex. Nunc pretium rutrum pellentesque. Etiam tellus lorem,
          suscipit vel commodo eu, maximus ac nisl. Curabitur sagittis turpis in
          magna pellentesque aliquet. Vestibulum euismod, enim blandit lobortis
          efficitur, diam dui laoreet massa, sed dapibus sem enim eget
          odio.Nulla sed elit risus. Integer feugiat nec nibh in maximus. Duis
          porta justo et ullamcorper pharetra. Praesent at iaculis enim.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; In hac habitasse platea dictumst. Pellentesque
          varius massa ac vehicula molestie
        </div>
      </div>
    );
  }
  return <p>Loading...</p>;
}

export default SingleProduct;
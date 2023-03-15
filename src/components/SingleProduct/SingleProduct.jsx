/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSnackbar } from "notistack";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { bikes } from "../../mocks/bikes";
import NavBar from "../NavBar/NavBar";
import { ShopContext } from "../../contexts/ShopContext";

function SingleProduct() {
  const { id } = useParams();
  const [productId, setProductId] = useState(-1);
  const { addToCart } = useContext(ShopContext);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const backSumbit = () => {
    navigate("/");
  };

  function Click(variant) {
    enqueueSnackbar("Bike added to cart successfully!", { variant });
  }

  useEffect(() => {
    setProductId(bikes.findIndex((bike) => bike.id.toString() === id));
  }, []);
  if (productId > -1) {
    return (
      <div>
        <NavBar />
        <div className="allCard">
          <nav>
            <ArrowBackIosIcon className="arrowSingle" onClick={backSumbit} />
            Back to all bikes
          </nav>
          <div className="cardSingle">
            <div className="cardSignleImages">
              <div className="bikePhotoSingle">
                {" "}
                <img
                  src={bikes[productId].src}
                  alt={bikes[productId].alt}
                  className="imageSingle"
                />
              </div>
              <div className="otherImages">
                {bikes[productId].srcArray.map((image, index) => {
                  return (
                    <div className="otherImagesSingle">
                      <img key={index} src={image} alt={bikes[productId].alt} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="descriptionSingle">
              <h2 className="titleSingle">{bikes[productId].bikeName}</h2>
              <h1 className="priceSingle">${bikes[productId].price}.00 </h1>
              <p className="descriptionHeader">Description</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel velit ac est molestie vestibulum. Donec vehicula sem quis
                nisl venenatis, et faucibus odio sollicitudin. Maecenas sed
                augue vel tortor lacinia sagittis ac nec ligula. Nunc et quam
                vel ipsum ullamcorper molestie. In bibendum lobortis
                ullamcorper. Integer ultricies pretium felis ac tristique.
                Aenean nibh lorem, iaculis quis porttitor nec, consectetur non
                justo.
              </p>
              <button
                type="button"
                className="addToCartBtnSingle"
                onClick={() => Click(addToCart(bikes[productId].id))}
              >
                Add To Cart
              </button>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
  return <p>Loading...</p>;
}

export default SingleProduct;

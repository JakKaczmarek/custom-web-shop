import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { useSnackbar } from "notistack";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { loadData } from "../../img/bikes";
import NavBar from "../NavBar/NavBar";
import { ShopContext } from "../../contexts/ShopContext";

function SingleProduct() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData("http://localhost:8000/api/bikes/all", setData);
  }, []);

  const { id } = useParams();
  const [productId, setProductId] = useState(-1);
  const { addToCart } = useContext(ShopContext);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [sliderData, setSliderData] = useState(null);
  const onHandleClick = (i) => {
    const slider = data[productId].srcArray[i];
    setSliderData(slider);
  };

  const backSumbit = () => {
    navigate("/");
  };

  function onAddClick(variant) {
    enqueueSnackbar("Bike added to cart successfully!", { variant });
  }

  useEffect(() => {
    if (productId > -1) setSliderData(data[productId].srcArray[0]);
    setProductId(data.findIndex((bike) => bike.id.toString() === id));
  }, [data]);
  if (productId > -1) {
    return (
      sliderData && (
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
                  &nbsp;
                  <img
                    src={sliderData.path}
                    alt={sliderData.alt}
                    className="imageSingle"
                  />
                </div>

                <div className="otherImages">
                  {data[productId].srcArray.map((image, i) => {
                    return (
                      <div className="otherImagesSingle" key={image.id}>
                        <img
                          key={image.id}
                          src={image.path}
                          className={sliderData.id === i + 1 ? "clicked" : ""}
                          alt={data[productId].alt}
                          role="presentation"
                          onClick={() => onHandleClick(i)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="descriptionSingle">
                <h2 className="titleSingle">{data[productId].bikeName}</h2>
                <h1 className="priceSingle">${data[productId].price}.00 </h1>
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
                  onClick={() => onAddClick(addToCart(data[productId].id))}
                >
                  Add To Cart
                </button>
              </div>
              <br />
            </div>
          </div>
        </div>
      )
    );
  }
  return <p>Loading...</p>;
}

export default SingleProduct;

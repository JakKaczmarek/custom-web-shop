import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { useSnackbar } from "notistack";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { loadData } from "../../img/FetchData";
import NavBar from "../NavBar/NavBar";
import { ShopContext } from "../../contexts/ShopContext";
import { IData, IPath } from "../../../@types/types";
import { AuthContext } from "../../contexts/AuthContext";

function SingleProduct() {
  const { addToCart } = useContext(ShopContext);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [data, setData] = useState<IData | null>(null);
  const { id } = useParams<string>();
  const [sliderData, setSliderData] = useState<IPath | null>(null);
  const { isAuthenticated } = useContext(AuthContext);

  const onHandleClick = (i: number) => {
    const slider = data?.srcArray ? data.srcArray[i] : null;
    setSliderData(slider);
  };
  const backSubmit = () => {
    navigate("/");
  };

  function onAddClick() {
    if (isAuthenticated === true) {
      enqueueSnackbar("Bike added to cart successfully!");
      addToCart(data?.id);
    } else window.alert("You need to sign in");
  }

  useEffect(() => {
    return loadData(`/api/bikes/${id}`, setData);
  }, []);

  useEffect(() => {
    if (data?.srcArray && data?.srcArray.length)
      setSliderData(data?.srcArray[0]);
  }, [data]);

  if (parseFloat(id!) > -1) {
    return (
      sliderData && (
        <div>
          <NavBar />
          <div className="allCard">
            <nav>
              <ArrowBackIosIcon className="arrowSingle" onClick={backSubmit} />
              Back to all bikes
            </nav>
            <div className="cardSingle">
              <div className="cardSingleImages">
                <div className="bikePhotoSingle">
                  &nbsp;
                  <img
                    src={sliderData.path}
                    alt="Can not load bike img"
                    className="imageSingle"
                  />
                </div>

                <div className="otherImages">
                  {data?.srcArray.map((image, i: number) => {
                    return (
                      <div className="otherImagesSingle" key={image.id}>
                        <img
                          key={image.id}
                          src={image.path}
                          className={sliderData.id === i + 1 ? "clicked" : ""}
                          alt={data?.alt}
                          role="presentation"
                          onClick={() => onHandleClick(i)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="descriptionSingle">
                <h2 className="titleSingle">{data?.bike_name}</h2>
                <h1 className="priceSingle">${data?.price}.00 </h1>
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
                  onClick={() => onAddClick()}
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

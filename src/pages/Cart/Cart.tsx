import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartItem } from "./CartItem";
import { ShopContext } from "../../contexts/ShopContext";
import NavBar from "../../components/NavBar/NavBar";
import { loadData } from "../../img/FetchData";
import { ICartItem, IData, IShopContext } from "../../../@types/types";

export default function Cart() {
  const [data, setData] = useState<IData[] | null>(null);

  useEffect(() => {
    loadData("http://localhost:8000/api/bikes/all", setData);
  }, []);
  const { cartItems, discount, setDiscount }: IShopContext =
    useContext(ShopContext);

  const totalPrice = Object.values(cartItems).reduce(
    (acc: number, curr: ICartItem) => acc + curr.price * curr.quantity,
    0
  );

  const navigate = useNavigate();
  const [discountCode, setDiscountCode] = useState<string>();

  const handleSumbitDiscount = () => {
    if (discountCode === "BIKE") {
      setDiscount(599);
    }
  };
  const handleSubmitCart = () => {
    navigate("/checkout");
  };
  const handleSubmitHome = () => {
    navigate("/");
  };

  return (
    <div className="shoppingCart">
      <NavBar />
      <span>
        {Object.keys(cartItems).length > 0 ? (
          <>
            <h1 className="cartTitle">Your Cart Items</h1>
            <p className="cartTitleDescription">
              Thank you for choosing our store and adding bicycles to your
              shopping cart! We are delighted to provide you with an exceptional
              cycling experience!
            </p>
          </>
        ) : (
          <h1 className="cartTitle">Your cart is empty</h1>
        )}
      </span>
      <div className="cart">
        <div className="cartBikes">
          {data?.map((bike) => {
            if (cartItems[bike.id]) {
              return <CartItem data={bike} key={bike.id} />;
            }
            return false;
          })}
        </div>
        <div className="cartSummary">
          <div className="cartTotalPrice">
            &nbsp;
            <p className="subPrice"> Subtotal: ${totalPrice} </p>
            <p className="subPrice">Discount: ${discount}</p>
            <p className="totalPrice">Total: ${totalPrice - discount}</p>
            <div className="cartBtns">
              <button
                type="button"
                className="cartCheckoutShoppingBtn"
                onClick={() => {
                  if (Object.keys(cartItems).length > 0) {
                    handleSubmitCart();
                  } else {
                    window.alert("You need to add at least one bike");
                  }
                }}
              >
                Checkout
              </button>
              <button
                type="button"
                className="cartContinueShoppingBtn"
                onClick={() => {
                  handleSubmitHome();
                }}
              >
                Continue Shopping
              </button>
            </div>
          </div>
          <div className="cartDiscount">
            <div>
              &nbsp;
              <input
                type="text"
                id="coupon"
                placeholder="DISCOUNT"
                className="cartDiscountInput"
                onChange={(e) => {
                  setDiscountCode(e.target.value);
                }}
              />
            </div>
            <div>
              <button
                type="button"
                className="cartDiscountBtn"
                onClick={() => {
                  if (Object.keys(cartItems).length > 0) {
                    handleSumbitDiscount();
                  } else {
                    window.alert("You need to add at least one bike");
                  }
                }}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="cartHelp">
            <div className="cartHelpTitle">
              <h5>Support</h5>
            </div>
            <div className="cartHelpText">
              <h3>
                <i className="cartPhone" /> +48 100 989 001
              </h3>
              <span className="small">
                Please contact with us if you have any questions. We are
                avalible 24h.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

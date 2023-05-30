import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartItem } from "./CartItem";
import { ShopContext } from "../../contexts/ShopContext";
import NavBar from "../../components/NavBar/NavBar";
import { loadData } from "../../img/bikes";

export default function Cart() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    loadData("http://localhost:8000/api/bikes/all", setData);
  }, []);
  const { cartItems } = useContext(ShopContext);

  const [discount, setDiscount] = useState(0);

  const totalPrice = Object.values(cartItems).reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const navigate = useNavigate();

  const [discountCode, setDiscountCode] = useState<any>(null);

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
        <h1 className="cartTitle">Your Cart Items</h1>
        <p className="cartTitleDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
          urna, dignissim nec auctor in, mattis vitae leo.
        </p>
      </span>
      <div className="cart">
        <div className="cartBikes">
          {data.map((bike) => {
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
                  handleSubmitCart();
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
                onClick={handleSumbitDiscount}
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

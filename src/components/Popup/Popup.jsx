import React from "react";
import "./Popup.css";

function Popup({ closePopup }) {
  return (
    <div className="popup">
      <div className="popupInner">
        <button
          type="button"
          className="closeBtn"
          onClick={() => closePopup(false)}
        >
          Continue shopping
        </button>
        <h1>You added product to your shopping cart</h1>
      </div>
    </div>
  );
}

export default Popup;

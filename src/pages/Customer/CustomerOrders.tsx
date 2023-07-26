import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerOrderTable from "./CustomerOrderTable";
import { IOrders } from "../../../@types/types";
import { loadData } from "../../img/FetchData";
import { AuthContext } from "../../contexts/AuthContext";

export default function CustomerOrders() {
  const [orderData, setOrderData] = useState<IOrders[] | null>(null);
  const { userEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBackToShop = () => {
    navigate("/");
  };

  useEffect(() => {
    loadData(`/api/orders?email=${userEmail}`, setOrderData);
  });
  return (
    <div>
      <div className="CustomerLeft">
        <button
          type="button"
          className="CustomerBackBtn"
          onClick={handleBackToShop}
        >
          Back to shop
        </button>
        <p className="CustomerHelloHistory">Welcome {userEmail}!</p>
      </div>

      <div className="CustomerTable">
        <h2 className="CustomerTitleHistory">History</h2>
        <div className="AdminTable">{CustomerOrderTable(orderData)}</div>
      </div>
    </div>
  );
}

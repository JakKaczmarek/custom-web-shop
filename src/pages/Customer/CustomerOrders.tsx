import React, { useContext, useEffect, useState } from "react";
import CustomerOrderTable from "./CustomerOrderTable";
import { IOrders } from "../../../@types/types";
import { loadData } from "../../img/FetchData";
import { AuthContext } from "../../contexts/AuthContext";

export default function CustomerOrders() {
  const [orderData, setOrderData] = useState<IOrders[] | null>(null);
  const { userEmail } = useContext(AuthContext);

  useEffect(() => {
    loadData(
      `http://localhost:8000/api/orders?email=${userEmail}`,
      setOrderData
    );
  });
  return (
    <div>
      <div className="AppModal">
        <h2 className="AdminTable">History</h2>
        <div className="AdminTable">{CustomerOrderTable(orderData)}</div>
      </div>
    </div>
  );
}

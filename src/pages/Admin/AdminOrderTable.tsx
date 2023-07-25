import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { deleteData } from "../../img/FetchData";
import { IOrders } from "../../../@types/types";

export default function AdminOrderTable({
  orderData,
}: {
  orderData: IOrders[] | null;
}) {
  const [selectedOrder, setSelectedOrder] = useState<IOrders | null>(null);

  const handleAddressInfoClick = (order: IOrders) => {
    setSelectedOrder(order);
  };

  const deleteOrder = (id: number) => {
    deleteData("http://localhost:8000/api/orders/delete", id);
  };

  return (
    <div className="AdminTable">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: 20, fontWeight: "bold" }}>
                ID
              </TableCell>
              <TableCell sx={{ fontSize: 20, fontWeight: "bold" }}>
                Created at
              </TableCell>
              <TableCell sx={{ fontSize: 20, fontWeight: "bold" }}>
                Orders
              </TableCell>
              <TableCell sx={{ fontSize: 20, fontWeight: "bold" }}>
                Total Amount
              </TableCell>
              <TableCell
                sx={{ fontSize: 20, fontWeight: "bold" }}
                align="center"
              >
                Info
              </TableCell>
              <TableCell
                sx={{ fontSize: 20, fontWeight: "bold" }}
                align="right"
              >
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderData?.map((item: IOrders) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell align="left">
                  {new Date(item.created_at).toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {item.orderBikes?.map((orderBike) => (
                    <div key={orderBike.id}>
                      x{orderBike.quantity} {orderBike.bike?.bike_name}
                    </div>
                  ))}
                </TableCell>
                <TableCell align="center">{item.total_amount}</TableCell>
                <TableCell align="right">
                  <button
                    type="button"
                    className="AdminOrderBtn"
                    onClick={() => handleAddressInfoClick(item)}
                  >
                    Address info
                  </button>
                </TableCell>
                <TableCell align="right">
                  <button
                    type="button"
                    className="AdminDeleteBtn"
                    onClick={() => deleteOrder(item.id!)}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedOrder && (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                type="button"
                onClick={() => {
                  setSelectedOrder(null);
                }}
              >
                X
              </button>
            </div>
            <h3>Address info:</h3>
            &nbsp;
            <p>Name: {selectedOrder.name}</p>
            <p>Email: {selectedOrder.email}</p>
            <p>Shipping Address: {selectedOrder.shipping_address}</p>
            <p>City: {selectedOrder.city}</p>
            <p>Postal Code: {selectedOrder.postal_code}</p>
            <p>Country: {selectedOrder.country}</p>
            <p>Phone: {selectedOrder.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
}

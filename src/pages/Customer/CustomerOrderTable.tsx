import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IOrders } from "../../../@types/types";

export default function CustomerOrderTable(orderData: IOrders[] | null) {
  return (
    <div className="AdminTable">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: 20, fontWeight: "bold" }}>
                Order ID
              </TableCell>
              <TableCell
                sx={{ fontSize: 20, fontWeight: "bold" }}
                align="right"
              >
                Address
              </TableCell>
              <TableCell
                sx={{ fontSize: 20, fontWeight: "bold" }}
                align="right"
              >
                Total Amount
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
                <TableCell align="right">{item.shipping_address}</TableCell>
                <TableCell align="right">{item.total_amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

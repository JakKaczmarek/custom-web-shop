import React from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IData } from "../../../@types/types";

interface AdminTableProps {
  data: IData[] | null;
  handleAddNewBike: () => void;
  handleAddNewImage: () => void;
}

export default function AdminTable({
  data,
  handleAddNewBike,
  handleAddNewImage,
}: AdminTableProps) {
  const deleteBike = (id: number) => {
    axios
      .delete(`http://localhost:8000/api/bikes/delete?id=${id}`)
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className="AdminTable">
        <button
          type="button"
          className="openModalBtn"
          onClick={handleAddNewBike}
        >
          Add new bike
        </button>
        &nbsp;
        <button
          type="button"
          className="openModalBtn"
          onClick={handleAddNewImage}
        >
          Add new image
        </button>
      </div>
      &nbsp;
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: 20, fontWeight: "bold" }}>
                ID
              </TableCell>
              <TableCell sx={{ fontSize: 20, fontWeight: "bold" }}>
                Bike Name
              </TableCell>
              <TableCell
                sx={{ fontSize: 20, fontWeight: "bold" }}
                align="right"
              >
                Price
              </TableCell>
              <TableCell
                sx={{ fontSize: 20, fontWeight: "bold" }}
                align="right"
              >
                Category
              </TableCell>
              <TableCell
                sx={{ fontSize: 20, fontWeight: "bold" }}
                align="right"
              >
                Alt
              </TableCell>
              <TableCell
                sx={{ fontSize: 20, fontWeight: "bold" }}
                align="center"
              >
                Src
              </TableCell>
              <TableCell
                sx={{ fontSize: 20, fontWeight: "bold" }}
                align="center"
              >
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item: IData) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell align="left">{item.bike_name}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.category}</TableCell>
                <TableCell align="right">{item.alt}</TableCell>
                <TableCell align="right">{item.src}</TableCell>
                <TableCell align="right">
                  <button
                    type="button"
                    className="AdminOrderBtn"
                    onClick={() => deleteBike(item.id)}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

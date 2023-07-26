import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { deleteData } from "../../img/FetchData";
import { IData, AdminTableProps } from "../../../@types/types";

export default function AdminTable({
  data,
  handleAddNewBike,
  handleAddNewImage,
}: AdminTableProps) {
  const deleteBike = (id: number) => {
    deleteData("/api/bikes/delete", id);
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
      <div className="AdminTable">
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
                      className="AdminDeleteBtn"
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
      </div>
    </>
  );
}

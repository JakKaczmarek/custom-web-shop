import { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import { Container, TextField, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router";
import ModalBike from "../../components/Modal/ModalBike";
import ModalImage from "../../components/Modal/ModalImage";
import { loadData } from "../../img/bikes";
import logoebike from "../../img/logoebike.png";
import Sign from "../../components/NavBar/Sign/Sign";
import { IData } from "../../../@types/types";

export default function Admin() {
  const [data, setData] = useState<IData[]>([]);
  const [modalOpenBike, setModalOpenBike] = useState(false);
  const [modalOpenImage, setModalOpenImage] = useState(false);
  const [query, setQuery] = useState("");

  const deleteBike = (id: number) => {
    axios
      .delete(`http://localhost:8000/api/bikes/delete?id=${id}`)
      .then((response) => {
        console.log(response.status);
        loadData(`http://localhost:8000/api/bikes/all`, setData);
      });
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  useEffect(() => {
    loadData(`http://localhost:8000/api/bikes/all`, setData);
  }, []);

  return (
    <div>
      <div className="navBar">
        <div className="image">
          <input
            type="image"
            src={logoebike}
            alt="logoebike"
            className="navbarImage"
            onClick={handleNavigate}
          />
        </div>
        <div>
          <Container maxWidth="md">
            <TextField
              id="search"
              type="search"
              label="Search by category"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              sx={{
                width: 350,
                color: "black",
                textDecorationColor: "black",
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldSet": {
                    borderColor: "black",
                  },
                },
              }}
              InputLabelProps={{ style: { color: "black" } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Container>
        </div>
        <div className="right">
          <div className="sign">
            <Sign />
          </div>
        </div>
      </div>
      <div className="AppModal">
        <div className="AdminTable">
          <button
            type="button"
            className="openModalBtn"
            onClick={() => {
              setModalOpenBike(true);
            }}
          >
            Add new bike
          </button>
          {modalOpenBike && (
            <ModalBike
              setModalOpenBike={setModalOpenBike}
              modalOpenBike={false}
            />
          )}
          &nbsp;
          <button
            type="button"
            className="openModalBtn"
            onClick={() => {
              setModalOpenImage(true);
            }}
          >
            Add new image
          </button>
          {modalOpenImage && (
            <ModalImage
              setModalOpenImage={setModalOpenImage}
              modalOpenImage={false}
            />
          )}
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
                    align="right"
                  >
                    Src
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .filter((item: IData) =>
                    item.category.toLowerCase().includes(query.toLowerCase())
                  )
                  .map((item: IData) => (
                    <TableRow
                      key={item.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {item.id}
                      </TableCell>
                      <TableCell align="left">{item.bikeName}</TableCell>
                      <TableCell align="right">{item.price}</TableCell>
                      <TableCell align="right">{item.category}</TableCell>
                      <TableCell align="right">{item.alt}</TableCell>
                      <TableCell align="right">{item.src}</TableCell>
                      <TableCell align="right">
                        {" "}
                        <button
                          type="button"
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
      </div>
    </div>
  );
}

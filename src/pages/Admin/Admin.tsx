import { useEffect, useState } from "react";
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
import { loadData } from "../../img/bikes";
import logoebike from "../../img/logoebike.png";
import Sign from "../../components/NavBar/Sign/Sign";

export default function Admin() {
  const [data, setData] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
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
            onClick={handleSubmit}
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
                align="right"
              >
                Src
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .filter((bike: any) =>
                bike.category.toLowerCase().includes(query.toLowerCase())
              )
              .map((bike) => (
                <TableRow
                  key={bike.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {bike.id}
                  </TableCell>
                  <TableCell align="left">{bike.bikeName}</TableCell>
                  <TableCell align="right">{bike.price}</TableCell>
                  <TableCell align="right">{bike.category}</TableCell>
                  <TableCell align="right">{bike.alt}</TableCell>
                  <TableCell align="right">{bike.src}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

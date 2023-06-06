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
import { loadData } from "../../img/bikes";
import logoebike from "../../img/logoebike.png";
import Sign from "../../components/NavBar/Sign/Sign";
import { IData } from "../../../@types/types";

export default function Admin() {
  const [data, setData] = useState<IData[]>([]);
  const [query, setQuery] = useState("");
  const [bike, setBike] = useState({
    bikeName: "",
    price: "",
    category: "",
    alt: "",
    src: "",
  });
  const [file, setFile] = useState(null);
  const [bikesId, setBikesId] = useState("");

  const handleChangeBike = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setBike({
      ...bike,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeFile = (e: any) => {
    setFile(e.target.files[0] ? e.target.files[0] : null);
  };

  const handleChangeBikesId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBikesId(e.target.value);
  };

  const handleSubmitNewBike = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const bikeData = bike;
    axios.post(`http://localhost:8000/api/bikes`, bikeData).then((response) => {
      console.log(response.status, response.data);
    });
  };

  const handleSubmitPathToBike = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file!);
    formData.append("bikesId", bikesId);
    axios.post(`http://localhost:8000/upload`, formData).then((response) => {
      console.log(response.status, response.data);
    });
  };
  const deleteBike = (id: number) => {
    axios
      .delete(`http://localhost:8000/api/bikes/delete?id=${id}`)
      .then((response) => {
        console.log(response.status, response.data);
        loadData(`http://localhost:8000/api/bikes/all`, setData);
      });
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  useEffect(() => {
    loadData(`http://localhost:8000/api/bikes/all`, setData);
    console.log(data);
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
                    <button type="button" onClick={() => deleteBike(item.id)}>
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <h1>Add new bike</h1>
        <form onSubmit={handleSubmitNewBike}>
          <label htmlFor="bikeName">
            bikeName
            <input
              type="text"
              name="bikeName"
              value={bike.bikeName}
              onChange={handleChangeBike}
            />
          </label>
          <label htmlFor="price">
            price
            <input
              type="text"
              name="price"
              value={bike.price}
              onChange={handleChangeBike}
            />
          </label>
          <label htmlFor="category">
            category
            <input
              type="text"
              name="category"
              value={bike.category}
              onChange={handleChangeBike}
            />
          </label>
          <label htmlFor="alt">
            alt
            <input
              type="text"
              name="alt"
              value={bike.alt}
              onChange={handleChangeBike}
            />
          </label>
          <label htmlFor="src">
            src
            <input
              type="text"
              name="src"
              value={bike.src}
              onChange={handleChangeBike}
            />
          </label>
          <button type="submit">Add</button>
        </form>
        &nbsp;
        <h1>Add photo to bike</h1>
        <form
          method="POST"
          onSubmit={handleSubmitPathToBike}
          encType="multipart/form-data"
        >
          <input
            type="file"
            name="path"
            id="path"
            onChange={handleChangeFile}
          />
          <input
            type="number"
            name="bikesId"
            id="bikesId"
            onChange={handleChangeBikesId}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

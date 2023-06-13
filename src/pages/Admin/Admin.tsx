import { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { Container, TextField, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router";
import ModalBike from "../../components/Modal/ModalBike";
import ModalImage from "../../components/Modal/ModalImage";
import { loadData } from "../../img/FetchData";
import logoebike from "../../img/logoebike.png";
import Sign from "../../components/NavBar/Sign/Sign";
import { IData } from "../../../@types/types";
import AdminTable from "./AdminTable";

export default function Admin() {
  const [data, setData] = useState<IData[] | null>(null);
  const [modalOpenBike, setModalOpenBike] = useState(false);
  const [modalOpenImage, setModalOpenImage] = useState(false);
  const [filterBikeName, setfilterBikeName] = useState("");

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  const addBike = () => {
    setModalOpenBike(false);
    setfilterBikeName("");
    loadData(`http://localhost:8000/bikes?bikeName=${filterBikeName}`, setData);
  };

  const deleteBike = (id: number) => {
    axios
      .delete(`http://localhost:8000/api/bikes/delete?id=${id}`)
      .then((response) => {
        console.log(response.status);
        setData((prevData) => prevData!.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    loadData(`http://localhost:8000/bikes?bikeName=${filterBikeName}`, setData);
  }, [filterBikeName]);
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
              label="Search by bikeName"
              value={filterBikeName}
              onChange={(e) => setfilterBikeName(e.target.value)}
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
              addBike={addBike}
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
        {AdminTable(data, deleteBike)}
      </div>
    </div>
  );
}

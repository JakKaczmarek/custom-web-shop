import { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { Container, TextField, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router";
import debounce from "lodash.debounce";
import ModalBike from "../../components/Modal/ModalBike";
import ModalImage from "../../components/Modal/ModalImage";
import { loadData } from "../../img/FetchData";
import logoebike from "../../img/logoebike.png";
import Sign from "../../components/NavBar/Sign/Sign";
import { IData, IOrders } from "../../../@types/types";
import AdminTable from "./AdminTable";
import AdminOrderTable from "./AdminOrderTable";

export default function Admin() {
  const [data, setData] = useState<IData[] | null>(null);
  const [orderData, setOrderData] = useState<IOrders[] | null>(null);
  const [modalOpenBike, setModalOpenBike] = useState(false);
  const [modalOpenImage, setModalOpenImage] = useState(false);
  const [filterBikeName, setFilterBikeName] = useState("");
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [showAdminTable, setShowAdminTable] = useState(true);
  const [showOrderTable, setShowOrderTable] = useState(false);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  const debouncedFilterBikeName = debounce(setFilterBikeName, 400);

  const addBike = () => {
    setModalOpenBike(false);
    setFilterBikeName("");
    loadData(
      `http://localhost:8000/bikes?bike_name=${filterBikeName}`,
      setData
    );
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
    loadData(
      `http://localhost:8000/bikes?bike_name=${filterBikeName}`,
      setData
    );
    loadData(`http://localhost:8000/api/orders/all`, setOrderData);
    if (orderData) {
      const revenue = orderData.reduce(
        (total, order) => total + order.total_amount,
        0
      );
      setTotalRevenue(revenue);
    }
  }, [filterBikeName, orderData]);

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
              label="Search by bike name"
              onChange={(e) => debouncedFilterBikeName(e.target.value)}
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
        <h2 className="AdminTable">Bikes</h2>
        <button
          type="button"
          className="openModalBtn"
          onClick={() => setShowAdminTable(!showAdminTable)}
        >
          {showAdminTable ? "Hide bikes" : "Show bikes"}
        </button>
        {showAdminTable && AdminTable(data, deleteBike)}
        &nbsp;
        <h2 className="AdminTable">Orders</h2>
        <div className="TotalRevenue">Total Revenue: {totalRevenue} USD</div>
        <button
          type="button"
          className="openModalBtn"
          onClick={() => setShowOrderTable(!showOrderTable)}
        >
          {showOrderTable ? "Hide orders" : "Show orders"}
        </button>
        {showOrderTable && AdminOrderTable(orderData)}
      </div>
    </div>
  );
}

import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import debounce from "lodash.debounce";
import { Pagination } from "../Pagination/Pagination";
import { loadData } from "../../img/FetchData";
import { ShopContext } from "../../contexts/ShopContext";
import { IData } from "../../../@types/types";
import CUBE from "../../img/CUBE.png";
import ORBEA from "../../img/ORBEA.png";
import VITUS from "../../img/VITUS.png";
import { AuthContext } from "../../contexts/AuthContext";

export default function Products() {
  const { addToCart } = useContext(ShopContext);
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState<IData[] | null>(null);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterBikeName, setFilterBikeName] = useState("");
  const [page, setPage] = useState(1);
  const { isAuthenticated } = useContext(AuthContext);

  const handleFilter = (value: string) => {
    setFilterCategory(value);
    setPage(1);
  };

  const allData = () => {
    setPage(1);
    setFilterCategory("");
  };

  const loadPageData = (e: number) => {
    setPage(e);
  };

  const debouncedFilterBikeName = debounce(setFilterBikeName, 400);

  function onAddClick(e: number) {
    if (isAuthenticated === true) {
      enqueueSnackbar("Bike added to cart successfully!");
      addToCart(data![data!.findIndex((bike) => e === bike.id)].id);
    } else window.alert("You need to sign in");
  }

  useEffect(() => {
    return loadData(
      `http://localhost:8000/bikes?limit=3&page=${page}&category=${filterCategory}&bike_name=${filterBikeName}`,
      setData
    );
  }, [page, filterCategory, filterBikeName]);

  return (
    <div>
      <div className="Search">
        <Container maxWidth="md" sx={{ mt: 5 }}>
          <TextField
            id="search"
            type="search"
            label="Search"
            InputLabelProps={{ style: { color: "gray" } }}
            className="SearchInput"
            onChange={(e) => debouncedFilterBikeName(e.target.value)}
            sx={{
              background: "white",
              width: 400,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldSet": {
                  borderColor: "gray",
                },
              },
            }}
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
      <div className="Category">
        <button
          type="button"
          className="categoryBtns"
          onClick={() => allData()}
        >
          All
        </button>
        <input
          type="image"
          src={CUBE}
          alt="logoebike"
          className="categoryBtns"
          onClick={() => handleFilter("Cube")}
          value={filterCategory}
        />
        <input
          type="image"
          src={ORBEA}
          alt="logoebike"
          className="categoryBtns"
          onClick={() => handleFilter("Orbea")}
          value={filterCategory}
        />
        <input
          type="image"
          src={VITUS}
          alt="logoebike"
          className="categoryBtns"
          onClick={() => handleFilter("Vitus")}
          value={filterCategory}
        />
      </div>
      <div className="products">
        {data?.map((bike: IData) => {
          return (
            <div className="product" key={bike.id}>
              <div className="bike">
                <img
                  key={bike.id}
                  src={bike.src}
                  alt={bike.alt}
                  className="image"
                />
              </div>
              <div className="description">
                <p className="bikeName">
                  <b>{bike.bike_name}</b>
                </p>
                <p className="bikePrice"> ${bike.price}</p>
                <div className="Btns">
                  <NavLink to={`/product/${bike.id}`}>
                    <button type="button" className="infoBtn">
                      <b>Show Info</b>
                    </button>
                  </NavLink>
                  <button
                    type="button"
                    className="addToCartBtn"
                    onClick={() => onAddClick(bike.id)}
                  >
                    <b>Add To Cart </b>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>{Pagination(data, page, loadPageData)}</div>
    </div>
  );
}

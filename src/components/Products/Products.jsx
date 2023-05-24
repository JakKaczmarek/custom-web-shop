import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSnackbar } from "notistack";
import { test } from "../Pagination/Pagination";
import { loadData } from "../../img/bikes";
import { ShopContext } from "../../contexts/ShopContext";

export default function Products() {
  const { addToCart } = useContext(ShopContext);
  const [query, setQuery] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);

  const handleFilter = (value) => {
    setFilterValue(value);
  };
  const allData = () => {
    setPage(1);
  };

  const loadPageData = (e) => {
    setPage(e);
  };

  function onAddClick(variant) {
    enqueueSnackbar("Bike added to cart successfully!", { variant });
  }

  useEffect(() => {
    loadData(
      `http://localhost:8000/bikes?limit=3&page=${page}&category=${filterValue}`,
      setData
    );
  }, [page, filterValue]);

  return (
    <div>
      <div className="Search">
        <input
          type="text"
          placeholder="Search for product ... "
          className="SearchInput"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="Category">
        <button
          type="button"
          className="categoryBtns"
          onClick={() => allData()}
        >
          All
        </button>
        <button
          type="button"
          className="categoryBtns"
          onClick={() => handleFilter("Cube")}
          value={filterValue}
        >
          Cube
        </button>
        <button
          type="button"
          className="categoryBtns"
          onClick={() => handleFilter("Orbea")}
          value={filterValue}
        >
          Orbea
        </button>
        <button
          type="button"
          className="categoryBtns"
          onClick={() => handleFilter("Vitus")}
          value={filterValue}
        >
          Vitus
        </button>
      </div>
      <div className="products">
        {data
          .filter((bike) =>
            bike.bikeName.toLowerCase().includes(query.toLowerCase())
          )
          .map((bike) => {
            return (
              <div className="product" key={bike.id}>
                <div className="bike">
                  <img
                    key={bike.id}
                    src={bike.src}
                    alt={bike.alt}
                    className="image"
                    style={{ width: 380, height: 380 }}
                  />
                </div>
                <div className="description">
                  <p className="bikeName">
                    <b>{bike.bikeName}</b>
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
                      onClick={() => onAddClick(addToCart(bike.id))}
                    >
                      <b>Add To Cart </b>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div>{test(data, page, loadPageData)}</div>
    </div>
  );
}

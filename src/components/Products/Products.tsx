import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Pagination } from "../Pagination/Pagination";
import { loadData } from "../../img/bikes";
import { ShopContext } from "../../contexts/ShopContext";
import { IData } from "../../../@types/types";

export default function Products() {
  const { addToCart } = useContext(ShopContext);
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState<IData[] | null>(null);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterBikeName, setfilterBikeName] = useState("");
  const [page, setPage] = useState(1);

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

  function onAddClick(e: number) {
    enqueueSnackbar("Bike added to cart successfully!");
    addToCart(data![data!.findIndex((bike) => e === bike.id)].id);
  }

  useEffect(() => {
    return loadData(
      `http://localhost:8000/bikes?limit=3&page=${page}&category=${filterCategory}&bikeName=${filterBikeName}`,
      setData
    );
  }, [page, filterCategory, filterBikeName]);

  return (
    <div>
      <div className="Search">
        <input
          type="text"
          placeholder="Search for product ... "
          className="SearchInput"
          onChange={(e) => setfilterBikeName(e.target.value)}
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
          value={filterCategory}
        >
          Cube
        </button>
        <button
          type="button"
          className="categoryBtns"
          onClick={() => handleFilter("Orbea")}
          value={filterCategory}
        >
          Orbea
        </button>
        <button
          type="button"
          className="categoryBtns"
          onClick={() => handleFilter("Vitus")}
          value={filterCategory}
        >
          Vitus
        </button>
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

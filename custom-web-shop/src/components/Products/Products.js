import React from "react";
import border_collie from "./border_collie.jpg";
import dobermann from "./dobermann.jpg";
import dalmatian from "./dalmatian.jpg";
import collie_rough from "./collie_rough.jpg";
import bernese_mountain from "./bernese_mountain.jpg";
import great_dane from "./great_dane.jpg";

export default function Products() {
  return (
    <div className="products">
      <img src={border_collie} alt="border_collie"></img>
      <img src={dobermann} alt="dobermann"></img>
      <img src={dalmatian} alt="dalmatian"></img>
      <img src={collie_rough} alt="collie_rough"></img>
      <img src={great_dane} alt="great_dane"></img>
      <img src={bernese_mountain} alt="bernese_mountain"></img>
    </div>
  );
}

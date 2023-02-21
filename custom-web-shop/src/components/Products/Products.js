import React from "react";
import border_collie from "./border_collie.jpg";
import dobermann from "./dobermann.jpg";
import dalmatian from "./dalmatian.jpg";
import collie_rough from "./collie_rough.jpg";
import bernese_mountain from "./bernese_mountain.jpg";
import great_dane from "./great_dane.jpg";
import deerhound from "./deerhound.jpg";
import spitz from "./spitz.jpg";
import german_shepherd from "./german_shepherd.jpg";

export default function Products() {
  return (
    <div className="products">
      <img src={border_collie} alt="border_collie" className="product"></img>
      <img src={dobermann} alt="dobermann" className="product"></img>
      <img src={dalmatian} alt="dalmatian" className="product"></img>
      <img src={collie_rough} alt="collie_rough" className="product"></img>
      <img src={great_dane} alt="great_dane" className="product"></img>
      <img
        src={bernese_mountain}
        alt="bernese_mountain"
        className="product"
      ></img>
      <img src={deerhound} alt="deerhound" className="product"></img>
      <img src={spitz} alt="spitz" className="product"></img>
      <img
        src={german_shepherd}
        alt="german_shepherd"
        className="product"
      ></img>
    </div>
  );
}

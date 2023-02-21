import React from "react";
import border_collie from "./dogs/border_collie.jpg";
import dobermann from "./dogs/dobermann.jpg";
import dalmatian from "./dogs/dalmatian.jpg";
import collie_rough from "./dogs/collie_rough.jpg";
import bernese_mountain from "./dogs/bernese_mountain.jpg";
import great_dane from "./dogs/great_dane.jpg";
import deerhound from "./dogs/deerhound.jpg";
import spitz from "./dogs/spitz.jpg";
import german_shepherd from "./dogs/german_shepherd.jpg";
import beagle from "./dogs/beagle.jpg";
import airedale_terrier from "./dogs/airedale_terrier.jpg";
import basset_hound from "./dogs/basset_hound.jpg";

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
      <img src={beagle} alt="beagle" className="product"></img>
      <img
        src={airedale_terrier}
        alt="airedale_terrier"
        className="product"
      ></img>
      <img src={basset_hound} alt="basset_hound" className="product"></img>
    </div>
  );
}

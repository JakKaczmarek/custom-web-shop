import React from "react";
import { bikes } from "../../mocks/bikes";

export default function Product() {
  return (
    <div>
      <img src={bikes.src} alt={bikes.alt} />;
    </div>
  );
}

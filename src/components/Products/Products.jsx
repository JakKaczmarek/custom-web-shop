import React from "react";
import { dogs } from "../../mocks/dogs";
import {
  airedaleterrier,
  bassethound,
  beagle,
  bernesemountain,
  bordercollie,
  collierough,
  dalmatian,
  deerhound,
  dobermann,
  germanshepherd,
  greatdane,
  spitz,
} from "./dogs";

export default function Products() {
  return (
    <div className="products">
      {dogs.map((dog) => (
        <img
          key={dog.id}
          src={dog.src}
          alt={dog.alt}
          className="product"
          style={{ width: 400, height: 400 }}
        />
      ))}
      <img
        src={bordercollie}
        alt="bordercollie"
        className="product"
        style={{ width: 400, height: 400 }}
      />
      <img
        src={dobermann}
        alt="dobermann"
        className="product"
        style={{ width: 400, height: 400 }}
      />
      <img
        src={dalmatian}
        alt="dalmatian"
        className="product"
        style={{ width: 400, height: 400 }}
      />
      <img
        src={collierough}
        alt="collierough"
        className="product"
        style={{ width: 400, height: 400 }}
      />
      <img
        src={greatdane}
        alt="greatdane"
        className="product"
        style={{ width: 400, height: 400 }}
      />
      <img
        src={bernesemountain}
        alt="bernesemountain"
        className="product"
        style={{ width: 400, height: 400 }}
      />
      <img
        src={deerhound}
        alt="deerhound"
        className="product"
        style={{ width: 400, height: 400 }}
      />
      <img
        src={spitz}
        alt="spitz"
        className="product"
        style={{ width: 400, height: 400 }}
      />
      <img
        src={germanshepherd}
        alt="germanshepherd"
        className="product"
        style={{ width: 400, height: 400 }}
      />
      <img
        src={beagle}
        alt="beagle"
        className="product"
        style={{ width: 400, height: 400 }}
      />
      <img
        src={airedaleterrier}
        alt="airedaleterrier"
        className="product"
        style={{ width: 400, height: 400 }}
      />
      <img
        src={bassethound}
        alt="bassethound"
        className="product"
        style={{ width: 400, height: 400 }}
      />
    </div>
  );
}

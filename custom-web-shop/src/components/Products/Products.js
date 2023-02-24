import { border } from '@mui/system';
import React from 'react';
import { dogs } from '../../mocks/dogs';
import {
  airedale_terrier,
  basset_hound,
  beagle,
  bernese_mountain,
  border_collie,
  collie_rough,
  dalmatian,
  deerhound,
  dobermann,
  german_shepherd,
  great_dane,
  spitz,
} from './dogs';

export default function Products() {
  return (
    <div className="products">
      {dogs.map((dog) => (
        <img
          src={dog.src}
          alt={dog.alt}
          className="product"
          style={{ width: 400, height: 400 }}
        />
      ))}
      <img
        src={border_collie}
        alt="border_collie"
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
        src={collie_rough}
        alt="collie_rough"
        className="product"
        style={{ width: 400, height: 400 }}
      />
      <img
        src={great_dane}
        alt="great_dane"
        className="product"
        style={{ width: 400, height: 400 }}
      />
      <img
        src={bernese_mountain}
        alt="bernese_mountain"
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
        src={german_shepherd}
        alt="german_shepherd"
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
        src={airedale_terrier}
        alt="airedale_terrier"
        className="product"
        style={{ width: 400, height: 400 }}
      />
      <img
        src={basset_hound}
        alt="basset_hound"
        className="product"
        style={{ width: 400, height: 400 }}
      />
    </div>
  );
}

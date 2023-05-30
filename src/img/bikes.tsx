import axios from "axios";

export const loadData = (url: string, callback: any) => {
  axios
    .get(url)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => console.log(err));
};

//   {
//     src: bike8,
//     alt: "bike8",
//     id: 8,
//     category: "Orbea",
//     bikeName: "Orbea Vibe Mid H30",
//     price: 3800.0,
//     srcArray: [
//       { id: 1, src: bike8 },
//       { id: 2, src: bike8f1 },
//       { id: 3, src: bike8f2 },
//       { id: 4, src: bike8f3 },
//     ],
//   },
//   {
//     src: bike9,
//     alt: "bike9",
//     id: 9,
//     category: "Orbea",
//     bikeName: "Orbea Keram 10",
//     price: 3950.0,
//     srcArray: [
//       { id: 1, src: bike9 },
//       { id: 2, src: bike9f1 },
//       { id: 3, src: bike9f2 },
//       { id: 4, src: bike9f3 },
//     ],
//   },
//   {
//     src: bike10,
//     alt: "bike10",
//     id: 10,
//     category: "Cube",
//     bikeName: "Cube Supreme Hybrid ONE",
//     price: 3600.0,
//     srcArray: [
//       { id: 1, src: bike10 },
//       { id: 2, src: bike10f1 },
//       { id: 3, src: bike10f2 },
//       { id: 4, src: bike10f3 },
//     ],
//   },
//   {
//     src: bike11,
//     alt: "bike11",
//     id: 11,
//     category: "Cube",
//     bikeName: "Cube Nuride Hybrid EXC",
//     price: 4500.0,
//     srcArray: [
//       { id: 1, src: bike11 },
//       { id: 2, src: bike11f1 },
//       { id: 3, src: bike11f2 },
//       { id: 4, src: bike11f3 },
//     ],
//   },
//   {
//     src: bike12,
//     alt: "bike12",
//     id: 12,
//     category: "Vitus",
//     bikeName: "Vitus Escarpe 27.5 CRS",
//     price: 4670.0,
//     srcArray: [
//       { id: 1, src: bike12 },
//       { id: 2, src: bike12f1 },
//       { id: 3, src: bike12f2 },
//       { id: 4, src: bike12f3 },
//     ],
//   },
// ];

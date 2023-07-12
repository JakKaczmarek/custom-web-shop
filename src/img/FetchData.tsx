import axios from "axios";
import { IData, IOrders } from "../../@types/types";

export const loadData = (
  url: string,
  callback:
    | React.Dispatch<React.SetStateAction<IData | null>>
    | React.Dispatch<React.SetStateAction<IData[] | null>>
    | React.Dispatch<React.SetStateAction<IOrders[] | null>>
) => {
  axios
    .get(url)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => console.log(err));
};

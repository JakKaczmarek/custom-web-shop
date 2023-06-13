import axios from "axios";
import { IData } from "../../@types/types";

export const loadData = (
  url: string,
  callback:
    | React.Dispatch<React.SetStateAction<IData | null>>
    | React.Dispatch<React.SetStateAction<IData[] | null>>
) => {
  axios
    .get(url)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => console.log(err));
};

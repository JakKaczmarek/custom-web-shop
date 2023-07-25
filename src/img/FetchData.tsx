import axios from "axios";
import {
  IData,
  IOrders,
  INewBikeData,
  TokenData,
  TokenVerificationResponse,
} from "../../@types/types";

// GET data
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

// POST user/login
export const loginUser = (email: string, password: string) => {
  try {
    const response = axios.post("http://localhost:8000/api/users/login", {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error("Failed to log in user:", error);
    throw error;
  }
};

// POST user/register
export const registerUser = async (email: string, password: string) => {
  try {
    await axios.post("http://localhost:8000/api/users/register", {
      email,
      password,
    });
    console.log("User registered successfully!");
  } catch (error) {
    console.error("Failed to register user:", error);
    throw error;
  }
};

// POST verify token
export async function verifyToken(
  url: string,
  data: TokenData
): Promise<TokenVerificationResponse | null> {
  try {
    const response = await axios.post<TokenVerificationResponse>(url, data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

// POST order data
export const postData = (
  url: string,
  data: IOrders,
  callback: React.Dispatch<React.SetStateAction<IData | null>>
) => {
  axios
    .post(url, data)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => console.log(err));
};

// POST bike data

export const postNewBike = (bikeData: INewBikeData, callback: () => void) => {
  return axios
    .post("http://localhost:8000/api/bikes", bikeData)
    .then((response) => {
      console.log(response.status);
      callback();
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

// POST image data
export const postImageToBike = async (formData: FormData) => {
  try {
    const response = await axios.post("http://localhost:8000/upload", formData);
    console.log(response.status, response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// DELETE data
export const deleteData = (url: string, id: number) => {
  axios
    .delete(`${url}?id=${id}`)
    .then((response) => {
      console.log(response.status);
    })
    .catch((error) => {
      console.error(error);
    });
};

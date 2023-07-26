import axios from "axios";
import dotenv from "dotenv";
import {
  IData,
  IOrders,
  INewBikeData,
  TokenData,
  TokenVerificationResponse,
} from "../../@types/types";

dotenv.config();

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
// GET data
export const loadData = (
  url: string,
  callback:
    | React.Dispatch<React.SetStateAction<IData | null>>
    | React.Dispatch<React.SetStateAction<IData[] | null>>
    | React.Dispatch<React.SetStateAction<IOrders[] | null>>
) => {
  axios
    .get(`${API_BASE_URL}${url}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => console.log(err));
};

// POST user/login
export const loginUser = (email: string, password: string) => {
  try {
    const response = axios.post(`${API_BASE_URL}/api/users/login`, {
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
    await axios.post(`${API_BASE_URL}/api/users/register`, {
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
    const response = await axios.post<TokenVerificationResponse>(
      `${API_BASE_URL}${url}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

// POST order data
export const postData = async (url: string, data: IOrders) => {
  try {
    const response = await axios.post(`${API_BASE_URL}${url}`, data);
    return response.data;
  } catch (error) {
    console.error("Error while posting data:", error);
    throw error;
  }
};

// POST bike data

export const postNewBike = async (
  bikeData: INewBikeData,
  callback: () => void
) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/bikes`, bikeData);
    console.log(response.status);
    callback();
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// POST image data
export const postImageToBike = async (formData: FormData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/upload`, formData);
    console.log(response.status, response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// DELETE data
export const deleteData = async (url: string, id: number) => {
  try {
    const response = await axios.delete(`${`${API_BASE_URL}${url}`}?id=${id}`);
    return response.data;
  } catch (error) {
    console.error("Error while deleting data:", error);
    throw error;
  }
};

import { ReactNode } from "react";

export interface ICartItem {
  quantity: number;
  price: number;
}
export interface ICartItems {
  [key: string]: ICartItem;
}
export interface IShopContext {
  cartItems: ICartItems;
  itemCount: number;
  addToCart: (number) => void;
  removeFromCart: (number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
}

export interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  loginError?: boolean;
  logoSubmit: () => void;
  handleSubmit: (e) => void;
  handleRegisterSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface IButton {
  children: ReactNode;
  onClick: ReactNode;
}

export interface IPath {
  bikesId: number;
  id: number;
  path: string;
}

export interface IData {
  id: number;
  bike_name: string;
  category: string;
  price: number;
  alt: string;
  src: string;
  srcArray: IPath[];
}

export interface IOrders {
  id?: number;
  name: string;
  email: string;
  shipping_address: string;
  postal_code: string;
  city: string;
  country: string;
  phone: string;
  total_amount: number;
}

interface IsetModalOpenBike {
  modalOpenBike: boolean;
  setModalOpenBike: (open: boolean) => void;
}

interface IsetModalOpenImage {
  modalOpenImage: boolean;
  setModalOpenImage: (open: boolean) => void;
}

interface IaddBike {
  addBike: () => void;
}

interface FieldProps {
  sx?: {
    width: number;
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldSet": {
        borderColor: string;
      };
    };
  };
  label?: string;
  name?: string;
  autoComplete?: string;
  InputLabelProps?: { style: { color: string } };
  inputProps?: any;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export type HandleEvent = React.ChangeEvent<HTMLInputElement>;
export type SubmitEvent = React.FormEvent<HTMLFormElement>;
export type SearchBarProps = {
  value: string;
};

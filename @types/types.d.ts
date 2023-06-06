import { ReactNode } from "react";

export interface IShopContext {
  cartItems: any;
  itemCount: number;
  addToCart: (number) => void;
  removeFromCart: (number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
}

export interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  logoSubmit: () => void;
  handleSubmit: (e: any) => void;
}

export interface IButton {
  children: ReactNode;
  onClick: ReactNode;
}
export interface ICartItems {
  [key: string]: any;
}

export interface ISearchBar {
  onChange: jest.Mock<any>;
}

export interface IPath {
  bikesId: number;
  id: number;
  path: string;
}

export interface IData {
  id: number;
  bikeName: string;
  category: string;
  price: number;
  alt: string;
  src: string;
  srcArray: IPath[];
}

export type HandleEvent = React.ChangeEvent<HTMLInputElement>;
export type SubmitEvent = React.FormEvent<HTMLFormElement>;
export type SearchBarProps = {
  value: string;
};

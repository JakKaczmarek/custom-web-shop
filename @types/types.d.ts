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

export interface iButton {
  children: ReactNode;
  onClick: ReactNode;
}
export interface iCartItems {
  [key: string]: any;
}

export interface iSearchBar {
  onChange: jest.Mock<any, any, any>;
}

// export interface Props {
//   children: ReactNode;
// }

export interface IShopContext {
  cartItems: any[];
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

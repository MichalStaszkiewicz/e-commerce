import { CartProduct } from "@/components/cart/content";

export type CartState = {
  cartProducts: CartProduct[];
};
export type TCartContext = {
  cartState: CartState;

  setState: React.Dispatch<React.SetStateAction<CartState>>;
};

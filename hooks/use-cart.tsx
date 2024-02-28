import { CartContext } from "@/context/cart/cart";

import { useContext } from "react";

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw Error("Cart context is not available without ShopProvider");
  } else {
    return context;
  }
}

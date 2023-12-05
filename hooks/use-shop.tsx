import { ShopContext } from "@/context/shop/shop";
import { useContext } from "react";

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw Error("Shop context is not available without ShopProvider");
  } else {
    return context;
  }
}

import { useContext, useState } from "react";
import { createContext } from "vm";

import React from "react";
import { ShopState, TShopContext } from "./type";

export const ShopContext = React.createContext<TShopContext | null>(null);

export function ShopProvider({ children }: any) {
  const [shopState, setState] = useState<ShopState>({
    loading: false,
    error: false,
    products: [],
    originalProducts: [],
    paginationPage: 0,
    productsPerPage: 9,
  });

  return (
    <ShopContext.Provider value={{ shopState, setState }}>
      {children}
    </ShopContext.Provider>
  );
}

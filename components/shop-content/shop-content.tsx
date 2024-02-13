"use client";
import React, { createContext } from "react";
import "@/components/shop-content/style.scss";

import { ShopProvider } from "@/context/shop/shop";
import { ShopLeftColumn } from "./left-column/shop-left-column";
import { ShopRightColumn } from "./shop-right-column/shop-right-column";
import { useShop } from "@/hooks/use-shop";
import useMediaQuery from "@/hooks/use-media-query";
import { breakpoints } from "@/utils/breakpoints";

export default function ShopContent() {
 
  return (
    <ShopProvider>
      <div className="shop_content">
        <ShopViewState></ShopViewState>
      </div>
    </ShopProvider>
  );
}
function ShopViewState() {
 
  const shop = useShop();
  return shop.shopState.loading ? (
    <p>LOADING </p>
  ) : (
    <div className="shop-content-wrapper">
      <ShopLeftColumn />

      <ShopRightColumn />
    </div>
  );
}

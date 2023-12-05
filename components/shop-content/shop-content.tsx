"use client";
import React, { createContext } from "react";
import "@/components/shop-content/style.scss";

import { ShopProvider } from "@/context/shop/shop";
import { ShopLeftColumn } from "./left-column/shop-left-column";
import { ShopRightColumn } from "./shop-right-column/shop-right-column";

export default function ShopContent() {
  return (
    <ShopProvider>
      <div className="shop_content">
        <div className="container">
          <ShopLeftColumn />
          <div className="spacer"></div>

          <ShopRightColumn />
        </div>
      </div>
    </ShopProvider>
  );
}

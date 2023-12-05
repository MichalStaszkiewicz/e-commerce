"use client";
import React, { createContext } from "react";
import "@/components/shop-content/style.scss";
import { LeftColumn } from "./left-column/left-column";
import { RightColumn } from "./right-column/right-column";

import { ShopProvider } from "@/context/shop/shop";

export default function ShopContent() {
  return (
    <ShopProvider>
      <div className="shop_content">
        <div className="container">
          <LeftColumn />
          <div className="spacer"></div>

          <RightColumn />
        </div>
      </div>
    </ShopProvider>
  );
}

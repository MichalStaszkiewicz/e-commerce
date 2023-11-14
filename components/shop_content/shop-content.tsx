import React from "react";

import { LeftColumn } from "./left-column/left-column";
import { RightColumn } from "./right-column/right-column";

export default function ShopContent() {
  return (
    <div className="shop_content">
      <div className="container">
        <LeftColumn />
        <div className="spacer"></div>

        <RightColumn />
      </div>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DragEventHandler,
  LegacyRef,
  useCallback,
  useRef,
  useState,
} from "react";

import * as icons from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { SortButton } from "../sort_button";
import {
  CategoriesSize,
  CategoriesColorIndicator,
} from "../categories_color_indicator";
import { LeftColumn } from "./left_column";
import { RightColumn } from "./right_column";

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

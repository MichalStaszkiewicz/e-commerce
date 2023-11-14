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
import { SortButton } from "../sort-button";
import {
  CategoriesSize,
  CategoriesColorIndicator,
} from "../categories-color-indicator";
import { LeftColumn } from "./left-column";
import { RightColumn } from "./right-column";

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

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
import { SortButton } from "./sort_button";
import { CategoriesSize, CategoriesColorIndicator } from "./categories_color_indicator";

export default function ShopContent() {
  return (
    <div className="shop_content">
      <div className="container">
        <div className="left_column">
          <div className="categories">
            <p className="categories_header" style={{ marginTop: "20px" }}>
              CATEGORIES
            </p>
            <ul className="list">
              <li className="list_element">
                <div>Men</div> <p style={{ color: "black" }}>(2,220)</p>
              </li>
              <li className="list_element">
                <div>Woman</div> <p style={{ color: "black" }}>(2,550)</p>
              </li>
              <li className="list_element">
                <div>Children</div>
                <p style={{ color: "black" }}>(2,124)</p>
              </li>
            </ul>
          </div>

          <div className="filters">
            <div className="container">
              <p className="categories_header">FILTER BY PRICE</p>
              <div className="slider_container"></div>
              <p style={{ marginTop: "10px", fontSize: "14px" }}>$76 - $262</p>
              <p className="categories_header" style={{ marginTop: "20px" }}>
                SIZE
              </p>
              <div style={{ marginTop: "10px" }}></div>
              <ul className="size_list">
                <CategoriesSize label=" Small (2,319)" />
                <CategoriesSize label=" Medium (1,282)" />
                <CategoriesSize label=" Large (1,392)" />
              </ul>
              <p className="categories_header" style={{ marginTop: "20px" }}>
                COLOR
              </p>
              <div style={{ marginTop: "10px" }}></div>
              <div className="color_list">
                <CategoriesColorIndicator color={"red"} label={"Red"} />
                <CategoriesColorIndicator color={"green"} label={"Green"} />
                <CategoriesColorIndicator color={"aqua"} label={"Blue"} />
                <CategoriesColorIndicator color={"purple"} label={"Purple"} />
              </div>
            </div>
          </div>
        </div>
        <div className="spacer"></div>

        <div className="right_column">
          <div className="header">
            <p style={{ width: "100px", fontWeight: "450", fontSize: "18px" }}>
              Shop All
            </p>
            <div className="sort_container">
              <SortButton
                label={"LATEST"}
                width={100}
                height={40}
                menuData={["Man", "Woman", "Children"]}
              />
              <SortButton
                label={"REFERENCE"}
                width={100}
                height={40}
                menuData={[
                  "Relevance",
                  "Name, A To Z",
                  "Name, Z to A",
                  "Price, low to high",
                  "Price, high to low",
                ]}
              />
            </div>
          </div>
          <div className="list"></div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import {
  CategoriesColorIndicator,
  CategoriesSize,
} from "./categories-color-indicator";

import { Slider } from "antd";
import "@/components/shop-content/style.scss";
//TODO: Replace useState with keeping data in url as query
type SliderRangeValue = {
  min: number;
  max: number;
};

export function LeftColumn() {
  const minPrice = 100;
  const maxPrice = 1000;
  const [price, setPrice] = useState<SliderRangeValue>({ min: minPrice, max: maxPrice });

  const onChange = (value: number[]) => {
    if (value[0] != price.min) {
      setPrice({ min: value[0], max: price.max });
    } else {
      setPrice({ min: price.min, max: value[1] });
    }
  };

  return (
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
          <div style={{ width: "100%" }}>
            <Slider
              tooltip={{ open: false }}
              range
              step={1}
              min={minPrice}
              max={maxPrice}
              defaultValue={[price.min, price.max]}
              onChange={onChange}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <p>
            ${`${price.min}`} - ${`${price.max}`}{" "}
          </p>

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
  );
}

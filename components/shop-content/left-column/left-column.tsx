"use client";
import { useState } from "react";

import { ConfigProvider, Slider } from "antd";
import "@/components/shop-content/style.scss";
import React from "react";
import theme from "@/theme/theme_config";
import {
  CategoriesSize,
  CategoriesColorIndicator,
} from "./categories-color-indicator/component";
import CategoriesList from "./categories/list/component";
import ColorList from "./color-list/component";
import SizeList from "./size-list/component";

type SliderRangeValue = {
  min: number;
  max: number;
};

export function LeftColumn() {
  const minPrice = 100;
  const maxPrice = 1000;
  const [price, setPrice] = useState<SliderRangeValue>({
    min: minPrice,
    max: maxPrice,
  });
  const sliderRef = React.createRef<any>();
  const onChange = (value: number[]) => {
    if (value[0] != price.min) {
      setPrice({ min: value[0], max: price.max });
    } else {
      setPrice({ min: price.min, max: value[1] });
    }
  };

  return (
    <div className="left_column">
      <ConfigProvider theme={theme}>
        <div className="categories">
          <p className="categories_header">CATEGORIES</p>
          <CategoriesList />
        </div>

        <div className="filters">
          <p className="categories_header">FILTER BY PRICE</p>

          <Slider
            ref={sliderRef}
            tooltip={{ open: false }}
            range
            step={1}
            min={minPrice}
            max={maxPrice}
            defaultValue={[price.min, price.max]}
            onChange={onChange}
            style={{ width: "90%" }}
          />

          <p>
            ${`${price.min}`} - ${`${price.max}`}{" "}
          </p>

          <p className="categories_header" style={{ marginTop: "20px" }}>
            SIZE
          </p>

          <SizeList />
          <p className="categories_header" style={{ marginTop: "20px" }}>
            COLOR
          </p>

          <ColorList />
        </div>
      </ConfigProvider>
    </div>
  );
}

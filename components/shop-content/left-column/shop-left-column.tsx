"use client";
import { useEffect, useState } from "react";

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
import { useRouter, useSearchParams } from "next/navigation";
import { useShop } from "@/hooks/use-shop";
import { Product } from "@/model/product";

type SliderRangeValue = {
  min: number;
  max: number;
};

export function ShopLeftColumn() {
  const sliderMinPrice = 100;
  const sliderMaxPrice = 1000;
  const shop = useShop();

  const sliderRef = React.createRef<any>();

  const [price, setPrice] = useState<SliderRangeValue>({
    min: sliderMinPrice,
    max: sliderMaxPrice,
  });

  const { shopState, setState, setRouterPath } = useShop();

  const onChange = (value: number[]) => {
    if (value[0] != price.min) {
      setPrice({ min: value[0], max: price.max });
    } else {
      setPrice({ min: price.min, max: value[1] });
    }
  };
  useEffect(() => {
    setPrice({ min: shop.shopState.minPrice, max: shop.shopState.maxPrice });
  }, []);
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
            min={sliderMinPrice}
            max={sliderMaxPrice}
            defaultValue={[shop.shopState.minPrice, shop.shopState.maxPrice]}
            onChange={onChange}
            onAfterChange={(value) => {
              setState({
                ...shopState,

                minPrice: value[0],
                maxPrice: value[1],
              });
            }}
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

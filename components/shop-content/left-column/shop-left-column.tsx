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
  const searchParams = useSearchParams();
  const router = useRouter();
  const sliderRef = React.createRef<any>();
  let min: number = !Number.isNaN(parseInt(searchParams.get("min")!))
    ? parseInt(searchParams.get("min")!)
    : 100;
  let max: number = !Number.isNaN(parseInt(searchParams.get("max")!))
    ? parseInt(searchParams.get("max")!)
    : 1000;

  const minPrice = 100;
  const maxPrice = 1000;
  const [price, setPrice] = useState<SliderRangeValue>({
    min: min,
    max: max,
  });

  const { shopState, setState } = useShop();

  const onChange = (value: number[]) => {
    if (value[0] != min) {
      setPrice({ min: value[0], max: max });
    } else {
      setPrice({ min: min, max: value[1] });
    }
    const filteredProducts = shopState.originalProducts.filter(
      (item) => item.price >= min && item.price <= max
    );
    setState({
      ...shopState,
      products: filteredProducts,
    });
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
            onAfterChange={(value) => {
              if (value[0] != min) {
                router.push(`?min=${value[0]}&max=${value[1]}`, {
                  scroll: false,
                });
              } else {
                router.push(`?min=${value[0]}&max=${value[1]}`, {
                  scroll: false,
                });
              }
              const filteredProducts = shopState.originalProducts.filter(
                (item) => item.price >= min && item.price <= max
              );
              setState({
                ...shopState,
                products: filteredProducts,
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

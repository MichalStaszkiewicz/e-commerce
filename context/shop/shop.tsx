import { useContext, useEffect, useState } from "react";

import React from "react";
import { ShopState, TShopContext } from "./type";
import { useRouter, useSearchParams } from "next/navigation";
import { parse } from "path";
import {
  filterByCategory,
  filterByFromCategory,
  filterByPrice,
  filterBySize,
  readSizesFromString,
} from "@/utils/utility-function";
import { FilterBy } from "@/components/shop-content/shop-right-column/const";
//TODO: Flickerting page when pushing router string . possible solution would be checking if components are ready
export const ShopContext = React.createContext<TShopContext | null>(null);

export function ShopProvider({ children }: any) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isReady, setReady] = useState(false);
  const [shopState, setState] = useState<ShopState>({
    loading: true,
    error: false,
    products: [],
    originalProducts: [],
    paginationPage: 0,
    productsPerPage: 9,
    selectedCategories: [],
    selectedSizes: [],
    minPrice: 0,
    maxPrice: 1000,
  });
  useEffect(() => {
    setReady(true);
    setUp();
  }, []);
  useEffect(() => {
    if (isReady) {
      setRouterPath();
      setState({
        ...shopState,
        loading: false,
        products: filterProducts(),
      });
    }
  }, [
    shopState.minPrice,
    shopState.maxPrice,
    shopState.selectedSizes.length,
    shopState.selectedCategories.length,
  ]);
  function setRouterPath() {
    router.push(
      `?size=${shopState.selectedSizes}&min=${shopState.minPrice}&max=${shopState.maxPrice}`
    )
  }
  function setUp() {
    let urlData = readDataFromRoute();
    let products = [
      {
        name: "Aank Top",
        description: "basfbasasdfdfds",
        image: "/images/cloth_1.jpg",
        price: 920,
        categories: ["men"],
        availableSize: ["medium", "large"],
      },

      {
        name: "Zank Top",
        description: "basfbmfgnfasdfds",
        image: "/images/cloth_3.jpg",
        price: 620,
        categories: ["men"],
        availableSize: ["medium", "large"],
      },

      {
        name: "Bank Top",
        description: "basfbassdfgdfds",
        image: "/images/cloth_1.jpg",
        price: 220,
        categories: ["women"],
        availableSize: ["medium", "large"],
      },
      {
        name: "Lank Top",
        description: "bdfbsdfbs",
        image: "/images/cloth_2.jpg",
        price: 120,
        categories: ["children"],
        availableSize: ["small"],
      },
    ];

    setState({
      ...shopState,
      products: products,
      originalProducts: products,
      minPrice: urlData["min"],
      maxPrice: urlData["max"],
      selectedSizes: urlData["size"] as [],
    });
  }
  function filterProducts() {
    let products = shopState.originalProducts;

    if (shopState.selectedCategories.length > 0) {
      let categoryFilter: FilterBy = FilterBy.none;
      categoryFilter = filterByFromCategory(
        shopState.selectedCategories[shopState.selectedCategories.length - 1]
      );
      products = filterByCategory(categoryFilter, products);
    }

    const filteredProductsByPrice = filterByPrice(
      products,
      shopState.minPrice,
      shopState.maxPrice
    );

    const result = filterBySize(
      filteredProductsByPrice,
      shopState.selectedSizes
    );

    return result;
  }
  function readDataFromRoute() {
    let minPrice =
      searchParams.get("min") != null
        ? parseInt(searchParams.get("min")!)
        : 100;
    let maxPrice =
      searchParams.get("max") != null
        ? parseInt(searchParams.get("max")!)
        : 1000;
    let selectedSizes: string[] = [];
    let selectedSizesString =
      searchParams.get("size") != null ? searchParams.get("size") : "";

    if (selectedSizesString != null && selectedSizesString.length > 1) {
      selectedSizes = readSizesFromString(selectedSizesString);
    }

    return { min: minPrice, max: maxPrice, size: selectedSizes };
  }
  return (
    <ShopContext.Provider value={{ shopState, setState, setRouterPath }}>
      {children}
    </ShopContext.Provider>
  );
}

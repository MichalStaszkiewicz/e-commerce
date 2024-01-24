import { useContext, useEffect, useState } from "react";
import { createContext } from "vm";

import React from "react";
import { ShopState, TShopContext } from "./type";
import { useRouter, useSearchParams } from "next/navigation";
import { parse } from "path";

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
    console.log(shopState.originalProducts);
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
    isReady,
    shopState.minPrice,
    shopState.maxPrice,
    shopState.selectedSizes,
    shopState.selectedCategories,
  ]);
  function setRouterPath() {
    router.push(
      `?size=${shopState.selectedSizes}&min=${shopState.minPrice}&max=${shopState.maxPrice}`,
      {
        scroll: false,
      }
    );
  }
  function setUp() {
    let urlData = readDataFromRoute();
    let products = [
      {
        name: "Tank Top",
        description: "basfbasasdfdfds",
        image: "/images/cloth_1.jpg",
        price: 920,
        categories: ["men"],
        availableSize: ["medium", "large"],
      },

      {
        name: "Tank Top",
        description: "basfbmfgnfasdfds",
        image: "/images/cloth_3.jpg",
        price: 620,
        categories: ["men"],
        availableSize: ["medium", "large"],
      },

      {
        name: "Tank Top",
        description: "basfbassdfgdfds",
        image: "/images/cloth_1.jpg",
        price: 220,
        categories: ["woman"],
        availableSize: ["medium", "large"],
      },
      {
        name: "Tank Top",
        description: "bdfbsdfbs",
        image: "/images/cloth_2.jpg",
        price: 120,
        categories: ["chilren"],
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
    console.log(shopState.originalProducts);
    const filteredProducts = shopState.originalProducts.filter(
      (item) =>
        item.price >= shopState.minPrice && item.price <= shopState.maxPrice
    );
    return filteredProducts;
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
    let selectedSizes =
      searchParams.get("size") != null ? searchParams.get("size") : [];

    return { min: minPrice, max: maxPrice, size: selectedSizes };
  }
  return (
    <ShopContext.Provider value={{ shopState, setState, setRouterPath }}>
      {children}
    </ShopContext.Provider>
  );
}

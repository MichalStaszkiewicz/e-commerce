"use client";
import FadeOnVisible from "../../effects/fade-on-visible/component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import * as icons from "@fortawesome/free-solid-svg-icons";

import "@/components/shop-content/style.scss";
import ProductCard from "@/components/product-card/component";
import { ShopState } from "@/context/shop/type";
import { useShop } from "@/hooks/use-shop";

import { SortButton } from "./sort-button";
import Pagination from "@/components/pagination/component";

export function ShopRightColumn() {
  const { shopState, setState } = useShop();

  useEffect(() => {
    const pagesNumber = () => {
      return Math.ceil(shopState.products.length / shopState.productsPerPage);
    };

    console.log("products " + shopState.products);
    setState({
      ...shopState,
      products: [
        {
          name: "Tank Top",
          description: "basfbasdfds",
          image: "/images/cloth_1.jpg",
          price: 20,
        },

        {
          name: "Tank Top",
          description: "basfbasdfds",
          image: "/images/cloth_1.jpg",
          price: 20,
        },

        {
          name: "Tank Top",
          description: "basfbasdfds",
          image: "/images/cloth_1.jpg",
          price: 20,
        },
        {
          name: "Tank Top",
          description: "basfbasdfds",
          image: "/images/cloth_1.jpg",
          price: 20,
        },
      ],
    });
  }, [shopState.paginationPage]);
  const calculateStartIndex = function () {
    return shopState.paginationPage * shopState.productsPerPage;
  };
  const calculateEndIndex = () => {
    const startIndex = calculateStartIndex();
    const endIndex = Math.min(
      startIndex + shopState.productsPerPage,
      shopState.products.length
    );
    return endIndex;
  };

  return (
    <div className="right_column">
      <div className="header">
        <p className="shop-all">Shop All</p>
        <div className="sort_container">
          <SortButton
            label={"LATEST"}
            menuData={["Man", "Woman", "Children"]}
          />
          <SortButton
            label={"REFERENCE"}
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
      <div className="list">
        {shopState.products
          .slice(calculateStartIndex() as number, calculateEndIndex())
          .map((item, index) => (
            <FadeOnVisible
              children={
                <ProductCard
                  width={"250px"}
                  height={"350px"}
                  image={shopState.products[index].image}
                  label={shopState.products[index].name}
                  price={shopState.products[index].price}
                  description={shopState.products[index].description}
                />
              }
            ></FadeOnVisible>
          ))}
      </div>
      <Pagination
        itemPerPage={shopState.productsPerPage}
        itemQuantity={shopState.products.length}
        setPage={function (index: number): void {
          setState({
            ...shopState,
            paginationPage: index,
          });
        }}
        maxPaginationButtons={3}
      />
    </div>
  );
}

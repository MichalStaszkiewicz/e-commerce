"use client";
import FadeOnVisible from "../../effects/fade-on-visible/component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import * as icons from "@fortawesome/free-solid-svg-icons";

import "@/components/shop-content/style.scss";
import ProductCard from "@/components/product-card/component";
import { ShopState } from "@/context/shop/type";
import { useShop } from "@/hooks/use-shop";

import Pagination from "@/components/pagination/component";
import { SortBy } from "./const";
import SortListButton from "./sort-list-button";

export function ShopRightColumn() {
  const { shopState, setState } = useShop();

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
          <SortListButton
            label={"LATEST"}
            sortMethod={[
              {
                name: "Men",
                sortBy: SortBy.men,
              },
              {
                name: "Women",
                sortBy: SortBy.women,
              },
              {
                name: "Children",
                sortBy: SortBy.children,
              },
            ]}
          />
          <SortListButton
            label={"REFERENCE"}
            sortMethod={[
              {
                name: "Relevance",
                sortBy: SortBy.relevance,
              },
              {
                name: "Name,A To Z",
                sortBy: SortBy.nameAToZ,
              },
              {
                name: "Name,Z To A",
                sortBy: SortBy.nameZToA,
              },
              {
                name: "Price,Low To High",
                sortBy: SortBy.priceDesc,
              },
              {
                name: "Price,High To Low",
                sortBy: SortBy.priceAsc,
              },
            ]}
          />
        </div>
      </div>
      <div className="list">
        {shopState.products
          .slice(calculateStartIndex() as number, calculateEndIndex())
          .map((item, index) => (
            <FadeOnVisible
              key={index}
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

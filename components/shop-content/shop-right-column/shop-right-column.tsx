"use client";
import FadeOnVisible from "../../effects/fade-on-visible/component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useRef, useState } from "react";
import * as icons from "@fortawesome/free-solid-svg-icons";

import "@/components/shop-content/style.scss";
import ProductCard from "@/components/product-card/component";
import { ShopState } from "@/context/shop/type";
import { useShop } from "@/hooks/use-shop";

import Pagination from "@/components/pagination/component";
import { FilterBy, SortBy } from "./const";
import SortListButton from "./sort-list-button";
import useMediaQuery from "@/hooks/use-media-query";
import { breakpoints } from "@/utils/breakpoints";

export function ShopRightColumn() {
  const { shopState, setState } = useShop();
  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const isTablet = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const isMobile = useMediaQuery(`(min-width: ${breakpoints.xs})`);
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
      <div className="shop-all-header">
        <p className="shop-all">Shop All</p>
        <div className="sort_container">
          <SortListButton
            label={"LATEST"}
            method={[
              {
                label: "Men",
                sortBy: SortBy.none,
                sort: false,
                filter: true,
                filterBy: FilterBy.men,
              },
              {
                label: "Women",
                sortBy: SortBy.none,
                sort: false,
                filter: true,
                filterBy: FilterBy.women,
              },
              {
                label: "Children",
                sortBy: SortBy.none,
                sort: false,
                filter: true,
                filterBy: FilterBy.children,
              },
            ]}
          />
          <SortListButton
            label={"REFERENCE"}
            method={[
              {
                label: "Relevance",
                sortBy: SortBy.relevance,
                sort: true,
                filter: false,
                filterBy: FilterBy.none,
              },
              {
                label: "Name,A To Z",
                sortBy: SortBy.nameAToZ,
                sort: true,
                filter: false,
                filterBy: FilterBy.none,
              },
              {
                label: "Name,Z To A",
                sortBy: SortBy.nameZToA,
                sort: true,
                filter: false,
                filterBy: FilterBy.none,
              },
              {
                label: "Price,Low To High",
                sortBy: SortBy.priceDesc,
                sort: true,
                filter: false,
                filterBy: FilterBy.none,
              },
              {
                label: "Price,High To Low",
                sortBy: SortBy.priceAsc,
                sort: true,
                filter: false,
                filterBy: FilterBy.none,
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
                  product={shopState.products[index]}
                  className={"shop-product-card"}
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

"use client";
import FadeOnVisible from "../../effects/fade-on-visible/component";

import { SortButton } from "./sort-button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import * as icons from "@fortawesome/free-solid-svg-icons";

import "@/components/shop-content/style.scss";
import ProductCard from "@/components/product-card/component";

import { ShopState } from "@/context/shop/type";
import Pagination from "@/components/pagination/component";
import { useShop } from "@/hooks/use-shop";
interface RightColumnState {
  shopState: ShopState;
  reachedEnd: boolean;
}
export function RightColumn() {
  const [reachedEnd, setReachedEnd] = useState(false);
  const { shopState, setState } = useShop();

  useEffect(() => {
    const pagesNumber = () => {
      return Math.ceil(shopState.products.length / shopState.productsPerPage);
    };

    setReachedEnd(shopState.paginationPage < pagesNumber() - 1);
    console.log("products " + shopState.products);
    setState({
      ...shopState,
      products: [
        1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4,
        1, 2, 3, 4,
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
                  image={"/images/cloth_1.jpg"}
                  label={"Tank top"}
                  price={50}
                  description={"Finding perfect product"}
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
